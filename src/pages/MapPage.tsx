import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cities } from '../data/cities'
import './MapPage.css'

const YANDEX_API_KEY = import.meta.env.VITE_YANDEX_MAPS_API_KEY as string
const SCRIPT_ID = 'ymaps2-script'

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ymaps: any
	}
}

export default function MapPage() {
	const mapRef = useRef<HTMLDivElement>(null)
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const mapInstanceRef = useRef<any>(null)

	useEffect(() => {
		let cancelled = false

		async function initMap() {
			try {
				await loadScript()
				if (cancelled) return

				await new Promise<void>((resolve) => window.ymaps.ready(resolve))
				if (cancelled) return
				if (!mapRef.current) return

				const map = new window.ymaps.Map(mapRef.current, {
					center: [55.8, 37.62],
					zoom: 7,
					controls: ['zoomControl', 'fullscreenControl'],
				})

				mapInstanceRef.current = map

				cities.forEach((city) => {
					const placemark = new window.ymaps.Placemark(
						[city.coords[1], city.coords[0]],
						{ balloonContent: city.name, hintContent: city.name },
						{
							preset: 'islands#darkGreenDotIconWithCaption',
							iconCaptionMaxWidth: '150',
						},
					)
					placemark.options.set('iconCaption', city.name)
					placemark.events.add('click', () => {
						navigate(`/cities/${city.id}`)
					})
					map.geoObjects.add(placemark)
				})

				if (!cancelled) setLoading(false)
			} catch {
				if (!cancelled)
					setError('Не удалось загрузить карту. Попробуйте обновить страницу.')
			}
		}

		initMap()

		return () => {
			cancelled = true
			if (mapInstanceRef.current) {
				mapInstanceRef.current.destroy()
				mapInstanceRef.current = null
			}
		}
	}, [navigate])

	return (
		<div className='map-page'>
			<h1 className='map-page__title'>Города на карте</h1>
			<p className='map-page__subtitle'>
				Нажмите на метку, чтобы перейти на страницу города
			</p>
			<div className='map-page__container'>
				{loading && !error && (
					<div className='map-page__overlay'>
						<span className='map-page__spinner' />
						Загрузка карты…
					</div>
				)}
				{error && (
					<div className='map-page__overlay map-page__error'>{error}</div>
				)}
				<div ref={mapRef} className='map-page__map' />
			</div>
		</div>
	)
}

function loadScript(): Promise<void> {
	return new Promise((resolve, reject) => {
		const existing = document.getElementById(SCRIPT_ID)
		if (existing) {
			if (window.ymaps) resolve()
			else existing.addEventListener('load', () => resolve())
			return
		}
		const script = document.createElement('script')
		script.id = SCRIPT_ID
		script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_API_KEY}&lang=ru_RU`
		script.onload = () => resolve()
		script.onerror = () =>
			reject(new Error('Yandex Maps script failed to load'))
		document.head.appendChild(script)
	})
}
