import { Link } from 'react-router-dom'
import type { City } from '../data/cities'
import './CityCard.css'

interface Props {
	city: City
}

export default function CityCard({ city }: Props) {
	return (
		<Link to={`/cities/${city.id}`} className='city-card'>
			<img src={city.images[0]} alt={city.name} className='city-card-image' />
			<div className='city-card-body'>
				<h3>{city.name}</h3>
				<p>{city.shortDescription}</p>
				<div className='city-card-meta'>
					<span className='city-card-price'>
						{city.price.toLocaleString('ru-RU')} ₽
					</span>
					<span className='city-card-days'>
						{city.days === 1 ? '1 день' : '2 дня'}
					</span>
				</div>
				<div className='city-card-tags'>
					{city.tripTypes.map((type) => (
						<span key={type} className='city-card-tag'>
							{type}
						</span>
					))}
				</div>
			</div>
		</Link>
	)
}
