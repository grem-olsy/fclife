import { cities } from '../data/cities'
import CityCard from '../components/CityCard'
import './CitiesPage.css'

export default function CitiesPage() {
	return (
		<div className='cities-page'>
			<h1>Города Подмосковья</h1>
			<p className='cities-subtitle'>
				Выберите город, чтобы узнать подробности
			</p>
			<div className='cities-grid'>
				{cities.map((city) => (
					<CityCard key={city.id} city={city} />
				))}
			</div>
		</div>
	)
}
