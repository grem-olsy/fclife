import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { cities } from '../data/cities'
import Gallery from '../components/Gallery'
import './CityDetailPage.css'

export default function CityDetailPage() {
	const { id } = useParams<{ id: string }>()
	const city = cities.find((c) => c.id === id)
	const [people, setPeople] = useState(1)
	const [needHotel, setNeedHotel] = useState(false)
	const [needFood, setNeedFood] = useState(false)
	const [needTransport, setNeedTransport] = useState(false)

	if (!city) {
		return (
			<div className='city-detail not-found'>
				<h1>Город не найден</h1>
				<Link to='/cities' className='btn btn-secondary'>
					Вернуться к городам
				</Link>
			</div>
		)
	}

	return (
		<div className='city-detail'>
			<Link to='/cities' className='back-link'>
				← Все города
			</Link>

			<h1>{city.name}</h1>

			<div className='city-detail-meta'>
				<span className='city-detail-price'>
					{city.price.toLocaleString('ru-RU')} ₽
				</span>
				<span className='city-detail-days'>
					{city.days === 1 ? '1 день' : '2 дня'}
				</span>
				{city.tripTypes.map((type) => (
					<span key={type} className='city-detail-tag'>
						{type}
					</span>
				))}
			</div>

			<Gallery images={city.images} alt={city.name} />

			<div className='city-detail-description'>
				{city.fullDescription.split('\n\n').map((block, i) => {
					const lines = block.split('\n')
					const isSection = lines.some((l) => l.startsWith('•'))
					if (isSection) {
						const heading = lines.find((l) => !l.startsWith('•'))
						const items = lines.filter((l) => l.startsWith('•'))
						return (
							<div key={i} className='desc-section'>
								{heading && <h3 className='desc-heading'>{heading}</h3>}
								<ul className='desc-list'>
									{items.map((item, j) => {
										const text = item.replace(/^•\s*/, '')
										const dashIdx = text.indexOf(' — ')
										return (
											<li key={j}>
												{dashIdx > -1 ? (
													<>
														<strong>{text.slice(0, dashIdx)}</strong>
														{' — '}
														{text.slice(dashIdx + 3)}
													</>
												) : (
													text
												)}
											</li>
										)
									})}
								</ul>
							</div>
						)
					}
					return (
						<p key={i} className='desc-paragraph'>
							{block}
						</p>
					)
				})}
			</div>

			<div className='cost-calculator'>
				<h2 className='cost-title'>Расчёт стоимости поездки</h2>

				<div className='cost-controls'>
					<div className='cost-field'>
						<label>Количество человек</label>
						<div className='cost-stepper'>
							<button onClick={() => setPeople((p) => Math.max(1, p - 1))}>
								−
							</button>
							<span>{people}</span>
							<button onClick={() => setPeople((p) => Math.min(20, p + 1))}>
								+
							</button>
						</div>
					</div>

					<div className='cost-field'>
						<label className='cost-checkbox'>
							<input
								type='checkbox'
								checked={needTransport}
								onChange={(e) => setNeedTransport(e.target.checked)}
							/>
							Транспорт (≈ 500 ₽/чел.)
						</label>
					</div>

					<div className='cost-field'>
						<label className='cost-checkbox'>
							<input
								type='checkbox'
								checked={needFood}
								onChange={(e) => setNeedFood(e.target.checked)}
							/>
							Питание (≈ 800 ₽/чел./день)
						</label>
					</div>

					{city.days === 2 && (
						<div className='cost-field'>
							<label className='cost-checkbox'>
								<input
									type='checkbox'
									checked={needHotel}
									onChange={(e) => setNeedHotel(e.target.checked)}
								/>
								Гостиница (≈ 3 000 ₽/ночь)
							</label>
						</div>
					)}
				</div>

				<div className='cost-breakdown'>
					<div className='cost-row'>
						<span>Экскурсионная программа</span>
						<span>{(city.price * people).toLocaleString('ru-RU')} ₽</span>
					</div>
					{needTransport && (
						<div className='cost-row'>
							<span>Транспорт</span>
							<span>{(500 * people).toLocaleString('ru-RU')} ₽</span>
						</div>
					)}
					{needFood && (
						<div className='cost-row'>
							<span>
								Питание ({city.days} {city.days === 1 ? 'день' : 'дня'})
							</span>
							<span>
								{(800 * people * city.days).toLocaleString('ru-RU')} ₽
							</span>
						</div>
					)}
					{needHotel && city.days === 2 && (
						<div className='cost-row'>
							<span>Гостиница (1 ночь)</span>
							<span>3 000 ₽</span>
						</div>
					)}
					<div className='cost-row cost-total'>
						<span>Итого</span>
						<span>
							{(
								city.price * people +
								(needTransport ? 500 * people : 0) +
								(needFood ? 800 * people * city.days : 0) +
								(needHotel && city.days === 2 ? 3000 : 0)
							).toLocaleString('ru-RU')}{' '}
							₽
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
