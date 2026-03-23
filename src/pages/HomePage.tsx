import { Link } from 'react-router-dom'
import { cities } from '../data/cities'
import CityCard from '../components/CityCard'
import './HomePage.css'

export default function HomePage() {
	return (
		<div className='home-page'>
			{/* Текст над баннером */}
			<h1 className='hero-title'>
				Собери свои выходные в увлекательное путешествие
			</h1>

			{/* Баннер */}
			<section className='hero'>
				<img src='/banner.jpg' alt='Подмосковье' className='hero-img' />
			</section>

			{/* Кнопка конструктора */}
			<section className='cta-block'>
				<Link to='/constructor' className='btn btn-primary'>
					Собери путешествие
				</Link>
			</section>

			{/* Блок с карточками городов */}
			<section className='cities-preview'>
				<h2>или выбери город</h2>
				<div className='cities-grid'>
					{cities.slice(0, 3).map((city) => (
						<CityCard key={city.id} city={city} />
					))}
				</div>
				<Link to='/cities' className='btn btn-secondary'>
					Все города
				</Link>
			</section>
		</div>
	)
}
