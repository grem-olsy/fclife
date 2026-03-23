import './HelpPage.css'

export default function HelpPage() {
	return (
		<div className='help-page'>
			<h1>Помощь</h1>

			{/* О проекте */}
			<section className='help-section'>
				<h2>О проекте</h2>
				<p>
					<strong>FCLife</strong> — конструктор путешествий по Подмосковью. Мы
					помогаем подобрать идеальное направление для поездки на один или два
					дня. Выберите бюджет, тип путешествия — и получите список подходящих
					городов с подробными описаниями и фотографиями.
				</p>
			</section>

			{/* Виды туризма */}
			<section className='help-section'>
				<h2>Виды туризма</h2>

				<div className='tourism-types'>
					<div className='tourism-type'>
						<h3>🏛 Познавательный</h3>
						<p>
							Исторические города, музеи, кремли, усадьбы. Узнайте больше об
							истории Подмосковья, посетите места, связанные с великими людьми и
							событиями.
						</p>
					</div>

					<div className='tourism-type'>
						<h3>🌿 Экологический</h3>
						<p>
							Природные заповедники, леса, реки, свежий воздух. Отдых от города
							— прогулки по живописным тропам, наблюдение за природой, пикники.
						</p>
					</div>

					<div className='tourism-type'>
						<h3>⛪ Религиозный</h3>
						<p>
							Древние монастыри, храмы, святые места. Паломничество и знакомство
							с духовным наследием Подмосковья.
						</p>
					</div>
				</div>
			</section>

			{/* QR-код */}
			<section className='help-section qr-section'>
				<h2>Поделитесь с друзьями</h2>
				<p>Отсканируйте QR-код, чтобы открыть сайт на телефоне:</p>
				<div className='qr-code'>
					{/* QR-код — placeholder, заменить на настоящий */}
					<img
						src='https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://fclife.ru'
						alt='QR-код fclife.ru'
						width={200}
						height={200}
					/>
				</div>
			</section>
		</div>
	)
}
