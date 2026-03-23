import { useParams, Link } from 'react-router-dom'
import { cities } from '../data/cities'
import Gallery from '../components/Gallery'
import './CityDetailPage.css'

export default function CityDetailPage() {
	const { id } = useParams<{ id: string }>()
	const city = cities.find((c) => c.id === id)

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
				<p>{city.fullDescription}</p>
			</div>
		</div>
	)
}
