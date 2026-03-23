import { useState } from 'react'
import { cities, type TripType } from '../data/cities'
import CityCard from '../components/CityCard'
import './ConstructorPage.css'

const TRIP_TYPES: TripType[] = [
	'познавательный',
	'экологический',
	'религиозный',
]

export default function ConstructorPage() {
	// Состояние фильтров
	const [days, setDays] = useState<1 | 2>(1)
	const [maxPrice, setMaxPrice] = useState(10000)
	const [selectedTypes, setSelectedTypes] = useState<TripType[]>([])

	// Переключатель чекбокса
	const toggleType = (type: TripType) => {
		setSelectedTypes((prev) =>
			prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
		)
	}

	// Фильтрация городов
	const filteredCities = cities.filter((city) => {
		// Проверяем длительность
		if (city.days !== days) return false
		// Проверяем цену
		if (city.price > maxPrice) return false
		// Проверяем виды туризма (если выбраны)
		if (selectedTypes.length > 0) {
			const hasMatchingType = city.tripTypes.some((t) =>
				selectedTypes.includes(t),
			)
			if (!hasMatchingType) return false
		}
		return true
	})

	return (
		<div className='constructor-page'>
			<h1>Конструктор путешествия</h1>
			<p className='constructor-subtitle'>
				Настройте параметры — мы подберём подходящие города
			</p>

			{/* Фильтры + логотип */}
			<div className='filters-wrapper'>
				<div className='filters'>
					{/* 1. Длительность */}
					<div className='filter-group'>
						<label className='filter-label'>Длительность</label>
						<div className='days-toggle'>
							<button
								className={days === 1 ? 'active' : ''}
								onClick={() => setDays(1)}
							>
								1 день
							</button>
							<button
								className={days === 2 ? 'active' : ''}
								onClick={() => setDays(2)}
							>
								2 дня
							</button>
						</div>
					</div>

					{/* 2. Слайдер стоимости */}
					<div className='filter-group'>
						<label className='filter-label'>
							Бюджет: до <strong>{maxPrice.toLocaleString('ru-RU')} ₽</strong>
						</label>
						<input
							type='range'
							min={2000}
							max={10000}
							step={500}
							value={maxPrice}
							onChange={(e) => setMaxPrice(Number(e.target.value))}
							className='price-slider'
						/>
						<div className='price-range'>
							<span>2 000 ₽</span>
							<span>10 000 ₽</span>
						</div>
					</div>

					{/* 3. Чекбоксы видов туризма */}
					<div className='filter-group'>
						<label className='filter-label'>Вид путешествия</label>
						<div className='trip-types'>
							{TRIP_TYPES.map((type) => (
								<label key={type} className='checkbox-label'>
									<input
										type='checkbox'
										checked={selectedTypes.includes(type)}
										onChange={() => toggleType(type)}
									/>
									<span>{type}</span>
								</label>
							))}
						</div>
					</div>
				</div>

				<div className='filters-logo'>
					<img src='/logo.png' alt='FCLife' />
				</div>
			</div>

			{/* 4. Результат */}
			<div className='constructor-results'>
				<h2>
					{filteredCities.length > 0
						? `Найдено: ${filteredCities.length}`
						: 'Ничего не найдено'}
				</h2>
				{filteredCities.length === 0 && (
					<p className='no-results'>Попробуйте изменить параметры фильтра</p>
				)}
				<div className='cities-grid'>
					{filteredCities.map((city) => (
						<CityCard key={city.id} city={city} />
					))}
				</div>
			</div>
		</div>
	)
}
