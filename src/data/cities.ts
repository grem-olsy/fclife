// Типы данных — описывают, какие поля есть у города
export type TripType = 'познавательный' | 'экологический' | 'религиозный'

export interface City {
	id: string // уникальный код (для URL)
	name: string // название
	shortDescription: string // краткое описание (для карточки)
	fullDescription: string // полное описание (для страницы)
	images: string[] // массив ссылок на фото
	price: number // стоимость в рублях
	days: 1 | 2 // 1 день или 2 дня
	tripTypes: TripType[] // виды туризма
	coords: [number, number] // [longitude, latitude]
}

// Тестовые данные — 12 городов Подмосковья
export const cities: City[] = [
	{
		id: 'kolomna',
		name: 'Коломна',
		shortDescription: 'Древний город с кремлём, пастилой и уютными улочками',
		fullDescription:
			'Коломна — один из старейших городов Подмосковья, расположенный в 100 км к юго-востоку от Москвы при слиянии рек Москвы и Оки. Город основан в 1177 году и пережил нашествие Батыя, княжеские междоусобицы и эпоху расцвета при Дмитрии Донском, который венчался здесь перед Куликовской битвой.\n\nЧто посетить:\n• Коломенский кремль (XVI век) — одна из мощнейших крепостей своего времени, сохранились 7 башен из 17. Территория открыта для прогулок бесплатно, экскурсии — от 400 ₽.\n• Музейная фабрика пастилы — театрализованная экскурсия с дегустацией коломенской пастилы, приготовленной по рецептам XIX века. Билет — от 600 ₽.\n• Музей «Калачная» — живое производство калачей в настоящей печи, с дегустацией. Билет — от 600 ₽.\n• Музей «Кузнечная слобода» — коллекция кованых изделий, вход свободный.\n• Старый посад и Посадская улица — атмосферные купеческие улочки с деревянными домами.\n• Арт-квартал «Патефонка» — креативное пространство в бывшем промышленном здании.\n\nКак добраться: электричка с Казанского вокзала (2,5 ч) — от 400 ₽ или экспресс РЭКС (2 ч) — от 500 ₽. На автомобиле по трассе М5 — около 1,5 ч.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kolomna_04-2014_img10_Kremlin.jpg/960px-Kolomna_04-2014_img10_Kremlin.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kolomna_kremlin_-_Kolomna_local_museum.jpg/960px-Kolomna_kremlin_-_Kolomna_local_museum.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/3/3b/View01.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kolomna_04-2014_img39_Posadskaya.jpg/960px-Kolomna_04-2014_img39_Posadskaya.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Old_Kolomna_town_-_Pastila_Museum_01.jpg/960px-Old_Kolomna_town_-_Pastila_Museum_01.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Old_Kolomna_town_-_Protection_Church.jpg/960px-Old_Kolomna_town_-_Protection_Church.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kremlin_Wall_-_Kolomna%2C_Russia_-_panoramio.jpg/960px-Kremlin_Wall_-_Kolomna%2C_Russia_-_panoramio.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mokeyev_Estate_Kolomna.jpg/960px-Mokeyev_Estate_Kolomna.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/2020-03-21_-_Kolomna_view_at_Kremlin_wall%2C_stadium%2C_Dmitry_Donskoy_monument.jpg/960px-2020-03-21_-_Kolomna_view_at_Kremlin_wall%2C_stadium%2C_Dmitry_Donskoy_monument.jpg',
		],
		price: 2800,
		days: 1,
		tripTypes: ['познавательный'],
		coords: [38.7784, 55.0858],
	},
	{
		id: 'sergiev-posad',
		name: 'Сергиев Посад',
		shortDescription: 'Духовный центр России с Троице-Сергиевой лаврой',
		fullDescription:
			'Сергиев Посад — единственный город Подмосковья в составе Золотого кольца России, расположенный в 70 км к северо-востоку от Москвы. Город вырос вокруг монастыря, основанного преподобным Сергием Радонежским в 1337 году, и по сей день остаётся духовным центром русского православия.\n\nЧто посетить:\n• Троице-Сергиева лавра — объект Всемирного наследия ЮНЕСКО, действующий мужской монастырь. Вход на территорию бесплатный. Здесь хранятся мощи Сергия Радонежского, можно увидеть иконостас работы Андрея Рублёва в Троицком соборе.\n• Историко-художественный музей-заповедник — расположен на территории лавры, коллекция древнерусского искусства. Билет — от 200 ₽.\n• Музей игрушки — один из старейших в Европе, основан в 1918 году. Коллекция русских и зарубежных игрушек. Билет — 300 ₽.\n• Гефсиманский Черниговский скит — пещерный монастырь XIX века с подземными кельями и храмами. Вход свободный, экскурсия — от 200 ₽.\n• Смотровая площадка «Блинная гора» — лучший вид на лавру, рядом кафе с блинами и монастырской выпечкой.\n\nКак добраться: электричка с Ярославского вокзала (1,5 ч) — от 250 ₽. Автобус №388 от м. ВДНХ — от 250 ₽. На автомобиле по Ярославскому шоссе — около 1,5 ч.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sergiyev_Posad._Trinity_Lavra_of_Saint_Sergius_P7160387_2350.jpg/960px-Sergiyev_Posad._Trinity_Lavra_of_Saint_Sergius_P7160387_2350.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sergiyev_Posad._Trinity_Lavra_of_Saint_Sergius._Church_of_Saint_Sergius_P7160400_2350.jpg/960px-Sergiyev_Posad._Trinity_Lavra_of_Saint_Sergius._Church_of_Saint_Sergius_P7160400_2350.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Trinity_Lavra_06-2015_img7_Refectory.jpg/960px-Trinity_Lavra_06-2015_img7_Refectory.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lavra_of_St._Sergius_2025_03.jpg/960px-Lavra_of_St._Sergius_2025_03.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Trinity_Lavra_of_St._Sergius_08.03.03014_%2811%29.jpg/960px-Trinity_Lavra_of_St._Sergius_08.03.03014_%2811%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Trinity_Lavra_of_St._Sergius_08.03.2014_%282%29.jpg/960px-Trinity_Lavra_of_St._Sergius_08.03.2014_%282%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/View_of_the_main_temple_of_the_Trinity_Lavra_of_St._Sergius.jpg/960px-View_of_the_main_temple_of_the_Trinity_Lavra_of_St._Sergius.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sergiev_Posad%2C_Russia%2C_The_Trinity_Lavra%2C_Monastery.jpg/960px-Sergiev_Posad%2C_Russia%2C_The_Trinity_Lavra%2C_Monastery.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Sergiev_Posad%2C_Russia%2C_The_Trinity_Lavra%2C_The_Assumption_Cathedral_2.jpg/960px-Sergiev_Posad%2C_Russia%2C_The_Trinity_Lavra%2C_The_Assumption_Cathedral_2.jpg',
		],
		price: 2200,
		days: 1,
		tripTypes: ['религиозный', 'познавательный'],
		coords: [38.1348, 56.3101],
	},
	{
		id: 'zvenigorod',
		name: 'Звенигород',
		shortDescription: 'Подмосковная Швейцария с древним монастырём',
		fullDescription:
			'Звенигород — один из старейших городов Подмосковья, основанный около 1152 года Юрием Долгоруким. Расположен в 50 км к западу от Москвы на берегу Москвы-реки. Благодаря живописным холмам и хвойным лесам город прозвали «подмосковной Швейцарией». Здесь жили и творили Чехов, Левитан, Танеев.\n\nЧто посетить:\n• Саввино-Сторожевский монастырь — основан в 1398 году учеником Сергия Радонежского. Действующий мужской монастырь с великолепным Рождественским собором XV века, где сохранились фрагменты фресок. Вход на территорию бесплатный.\n• Городок (Звенигородское городище) — древнее укрепление XII века на высоком холме над Москвой-рекой. Успенский собор на Городке (1399) — один из древнейших белокаменных храмов Подмосковья, хранил иконы Андрея Рублёва.\n• Музей Русского Десерта — интерактивный музей с дегустацией старинных русских сладостей. Мастер-класс — от 600 ₽.\n• Усадьба Введенское — архитектурный памятник XVIII века в стиле классицизм, живописный парк с видом на пойму реки.\n• Экотропы и лесные прогулки — звенигородские леса входят в природный заказник, идеальны для пеших и велосипедных прогулок.\n\nКак добраться: электричка с Белорусского или Савёловского вокзала (1,5 ч) — от 250 ₽. Автобус №455 от м. Кунцевская — от 200 ₽.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Savvino-StorozhevskyMonastery_DJI_0317.jpg/960px-Savvino-StorozhevskyMonastery_DJI_0317.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Savvino-Storozhevsky_Monastery_24_by_shakko.jpg/960px-Savvino-Storozhevsky_Monastery_24_by_shakko.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Savvino-StorozhevskyMonastery_DJI_0314.jpg/960px-Savvino-StorozhevskyMonastery_DJI_0314.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Moskvariver-zvenigorod.jpg/960px-Moskvariver-zvenigorod.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Savvino-Storozhevsky_Monastery_in_winter.jpg/960px-Savvino-Storozhevsky_Monastery_in_winter.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Savvino-StorozhevskyMonastery_DJI_0322.jpg/960px-Savvino-StorozhevskyMonastery_DJI_0322.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/The_Nativity_cathedral_in_the_Savvino-Storozhevsky_monastery.jpg/960px-The_Nativity_cathedral_in_the_Savvino-Storozhevsky_monastery.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Zvenigorod_razliv.jpg/960px-Zvenigorod_razliv.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Zvenigorod-centr.jpg/960px-Zvenigorod-centr.jpg',
		],
		price: 1800,
		days: 1,
		tripTypes: ['экологический', 'религиозный'],
		coords: [36.8537, 55.7294],
	},
	{
		id: 'dmitrov',
		name: 'Дмитров',
		shortDescription: 'Город-ровесник Москвы с живописным кремлём',
		fullDescription:
			'Дмитров — город в 65 км к северу от Москвы, основанный Юрием Долгоруким в 1154 году и названный в честь его сына Всеволода (в крещении Дмитрия). Город старше Москвы и имеет богатейшую историю — он был центром удельного княжества, пережил монгольское разорение и расцвёл в XV–XVI веках.\n\nЧто посетить:\n• Дмитровский кремль — земляной вал XII века высотой до 15 метров отлично сохранился. Внутри — Успенский собор XVI века с уникальным изразцовым декором. Вход свободный.\n• Музей-заповедник «Дмитровский кремль» — краеведческая экспозиция с коллекцией древнерусского искусства. Билет — от 200 ₽.\n• Пешеходная улица Кропоткинская — одна из самых красивых в Подмосковье, украшена скульптурами горожан XIX века, уютные кафе и магазины.\n• Борисоглебский монастырь — действующий мужской монастырь XVI века с красивой территорией. Вход свободный.\n• Перемиловская высота — мемориал защитникам Москвы 1941 года с монументом «Воин-освободитель» и панорамным видом на канал имени Москвы.\n\nКак добраться: электричка с Савёловского вокзала (1 ч 15 мин) — от 300 ₽. На автомобиле по Дмитровскому шоссе — около 1 ч.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Dmitrov_Nikolskye_Gate_2023-09-23_8697.jpg/960px-Dmitrov_Nikolskye_Gate_2023-09-23_8697.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Dmitrov_Kremlin_Ramparts_2023-09-23_8717.jpg/960px-Dmitrov_Kremlin_Ramparts_2023-09-23_8717.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dmitrov_Historical_sq_10_House_2023-09-23_8713.jpg/960px-Dmitrov_Historical_sq_10_House_2023-09-23_8713.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/4/46/Borisglebsky_Dmitrov_BellTower.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/c/c8/Borisglebsky_Monastery_Borisoglebsky_Cathedral.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/9/97/Borisoglebsky_Cathedral_Dmitrov.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Dmitrov%2C_Moscow_Oblast%2C_Russia_-_panoramio_%2814%29.jpg/960px-Dmitrov%2C_Moscow_Oblast%2C_Russia_-_panoramio_%2814%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Dmitrov%2C_Moscow_Oblast%2C_Russia_-_panoramio_%2815%29.jpg/960px-Dmitrov%2C_Moscow_Oblast%2C_Russia_-_panoramio_%2815%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Dmitrov%2C_Moscow_Oblast%2C_Russia_-_panoramio_%2819%29.jpg/960px-Dmitrov%2C_Moscow_Oblast%2C_Russia_-_panoramio_%2819%29.jpg',
		],
		price: 2000,
		days: 1,
		tripTypes: ['познавательный'],
		coords: [37.5219, 56.3437],
	},
	{
		id: 'istra',
		name: 'Истра',
		shortDescription: 'Новый Иерусалим — грандиозный монастырь и музей',
		fullDescription:
			'Истра — город в 40 км к западу от Москвы на одноимённой реке. Главная достопримечательность — Воскресенский Ново-Иерусалимский монастырь, основанный патриархом Никоном в 1656 году как копия святых мест Палестины. Река Истра была символически переименована в Иордан, а окрестные холмы получили библейские названия.\n\nЧто посетить:\n• Ново-Иерусалимский монастырь — грандиозный ансамбль с Воскресенским собором, воспроизводящим храм Гроба Господня в Иерусалиме. Вход на территорию бесплатный, экскурсии — от 500 ₽.\n• Музейно-выставочный комплекс «Новый Иерусалим» — один из крупнейших музеев Подмосковья, открыт в 2014 году. Постоянная экспозиция по истории края, временные выставки мирового уровня. Билет — от 450 ₽, временные выставки — от 400 ₽.\n• Силоамская купель — святой источник у стен монастыря.\n• Усадьба Покровское-Рубцово — историческая усадьба XVIII века, связанная с именем Морозовых и Чехова.\n• Берега реки Истры — живописные прогулочные маршруты, особенно красивы в золотую осень.\n\nКак добраться: электричка с Рижского вокзала до ст. Истра (1 ч 20 мин) — от 300 ₽. Автобус №372 от м. Тушинская — от 200 ₽.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Istra_New_Jerusalem_Monastery_2024-06_1718562423.JPG/960px-Istra_New_Jerusalem_Monastery_2024-06_1718562423.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Istra_New_Jerusalem_Monastery_2024-06_1718564141.JPG/960px-Istra_New_Jerusalem_Monastery_2024-06_1718564141.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/New_Jerusalem_Monastery_in_winter._City_of_Istra.jpg/960px-New_Jerusalem_Monastery_in_winter._City_of_Istra.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/20240801_New_Jerusalem_Monastery_04.jpg/960px-20240801_New_Jerusalem_Monastery_04.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/New_Jerusalem_Monastery_-_panoramio.jpg/960px-New_Jerusalem_Monastery_-_panoramio.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/New_Jerusalem_Monastery.jpg/960px-New_Jerusalem_Monastery.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Istra_New_Jerusalem_Monastery_2024-06_1718562672.JPG/960px-Istra_New_Jerusalem_Monastery_2024-06_1718562672.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Istra_Davidov_Dom_Tower_New_Jerusalem_Monastery.jpg/960px-Istra_Davidov_Dom_Tower_New_Jerusalem_Monastery.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/New_Jerusalem_Monastery._The_Resurrection_Cathedral_%281656%E2%80%931685%29._%283011194410%29.jpg/960px-New_Jerusalem_Monastery._The_Resurrection_Cathedral_%281656%E2%80%931685%29._%283011194410%29.jpg',
		],
		price: 2800,
		days: 1,
		tripTypes: ['религиозный', 'познавательный'],
		coords: [36.8583, 55.9166],
	},
	{
		id: 'serpukhov',
		name: 'Серпухов',
		shortDescription: 'Старинный город с Приокско-Террасным заповедником',
		fullDescription:
			'Серпухов — город в 100 км к югу от Москвы на реке Наре при впадении в Оку. Основан в 1339 году, был форпостом на южных рубежах Московского княжества. Серпуховские полки участвовали в Куликовской битве. Город на гербе имеет павлина — символ Приокско-Террасного заповедника.\n\nЧто посетить:\n• Приокско-Террасный заповедник — единственный заповедник в Подмосковье. Здесь работает Центральный зубровый питомник, где можно увидеть зубров в естественных условиях. Экскурсия — от 400 ₽, экотропа «Сквозь листву» с подвесными мостами — от 500 ₽.\n• Высоцкий мужской монастырь — основан в 1374 году по благословению Сергия Радонежского. Хранит чудотворный образ «Неупиваемая Чаша». Вход свободный.\n• Соборная гора (Серпуховский кремль) — сохранились фрагменты белокаменных стен и Троицкий собор. Отличная смотровая площадка.\n• Историко-художественный музей — коллекция живописи с работами Айвазовского, Шишкина, Поленова. Билет — от 200 ₽.\n• Купеческие кварталы — улицы Калужская и Ворошилова с особняками XIX века, атмосфера уездного города.\n\nКак добраться: электричка с Курского вокзала (2 ч) — от 400 ₽. На автомобиле по Симферопольскому шоссе — около 1,5 ч.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Vysotsky_Monastery_%28Serpukhov%29.jpg/960px-Vysotsky_Monastery_%28Serpukhov%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Vysotsky_Monastery_%28Serpukhov_%29.jpg/960px-Vysotsky_Monastery_%28Serpukhov_%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Vysotsky_Monastery_%28Serpukhov%29_02.jpg/960px-Vysotsky_Monastery_%28Serpukhov%29_02.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Serpukhov_Raspyatsky_church.jpg/960px-Serpukhov_Raspyatsky_church.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Serpukhov_RaspyatskyMonastery_003_4486.jpg/960px-Serpukhov_RaspyatskyMonastery_003_4486.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Serpukhov_VysotskyMon_AllSaintsChurch_0365.jpg/960px-Serpukhov_VysotskyMon_AllSaintsChurch_0365.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Serpukhov_VladychnyMonastery_GateChurch_003_3608.jpg/960px-Serpukhov_VladychnyMonastery_GateChurch_003_3608.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Serpukhov_RaspyatskyMonastery_003_4617.jpg/960px-Serpukhov_RaspyatskyMonastery_003_4617.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Serpukhov_Sovietskaya_31.jpg/960px-Serpukhov_Sovietskaya_31.jpg',
		],
		price: 3500,
		days: 1,
		tripTypes: ['экологический', 'познавательный'],
		coords: [37.4115, 54.9147],
	},
	{
		id: 'mozhaisk',
		name: 'Можайск',
		shortDescription: 'Бородинское поле и древний Лужецкий монастырь',
		fullDescription:
			'Можайск — старинный город в 110 км к западу от Москвы, известный как «щит Москвы». Именно здесь в 1812 году в 12 км от города произошло Бородинское сражение — крупнейшая битва Отечественной войны. Город носит звание «Город воинской славы».\n\nЧто посетить:\n• Бородинское поле — музей-заповедник на месте двух великих сражений (1812 и 1941 годов). Главный монумент на батарее Раевского, Спасо-Бородинский монастырь, экспозиция «Бородино — битва гигантов». Билет в музей — от 400 ₽, единый — от 700 ₽. Территория поля открыта бесплатно.\n• Лужецкий Ферапонтов монастырь — основан в 1408 году преподобным Ферапонтом Белозерским. Сохранились собор XVI века и стены XVII века. Вход свободный.\n• Можайский кремль (Соборная гора) — Ново-Никольский собор в псевдоготическом стиле на месте древнего кремля. Смотровая площадка с видом на город.\n• Можайское водохранилище («Можайское море») — популярное место для отдыха, рыбалки и прогулок.\n• Замри-гора — природная смотровая площадка с панорамой на пойму реки Москвы.\n\nКак добраться: электричка с Белорусского вокзала до ст. Можайск (2 ч) — от 400 ₽. До Бородина от станции — автобус или такси (~15 мин). На автомобиле по Минскому шоссе — около 1,5 ч.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/MozhayskKremlin_0944.jpg/960px-MozhayskKremlin_0944.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Mozhaysk_Kremlin_gate_01_by_shakko.jpg/960px-Mozhaysk_Kremlin_gate_01_by_shakko.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mozhaysk_Kremlin_gate_02_by_shakko.jpg/960px-Mozhaysk_Kremlin_gate_02_by_shakko.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Borodino-panorama-museum.jpg/960px-Borodino-panorama-museum.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Panorama-Museum_of_the_Battle_of_Borodino.jpg/960px-Panorama-Museum_of_the_Battle_of_Borodino.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Russia_3714_-_Borodino_%284171630602%29.jpg/960px-Russia_3714_-_Borodino_%284171630602%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/LuzhetskyMonastery.jpg/960px-LuzhetskyMonastery.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Luzhetsky_Monastery_101_0041.jpg/960px-Luzhetsky_Monastery_101_0041.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Luzhetsky_Monastery_101_0071.jpg/960px-Luzhetsky_Monastery_101_0071.jpg',
		],
		price: 5500,
		days: 2,
		tripTypes: ['познавательный', 'экологический'],
		coords: [36.0189, 55.507],
	},
	{
		id: 'dubna',
		name: 'Дубна',
		shortDescription: 'Наукоград на Волге с уникальной атмосферой',
		fullDescription:
			'Дубна — наукоград на севере Подмосковья (130 км от Москвы), расположенный на берегу Волги у впадения канала имени Москвы. Город возник в 1956 году вокруг Объединённого института ядерных исследований (ОИЯИ), где был синтезирован 105-й элемент таблицы Менделеева — дубний, названный в честь города.\n\nЧто посетить:\n• Памятник Ленину на канале имени Москвы — монументальная скульптура высотой 25 м (1937), один из самых больших памятников Ленину в стране. Напротив до 1962 года стоял аналогичный памятник Сталину.\n• Набережная Волги — благоустроенная прогулочная зона с пляжами, видом на Иваньковское водохранилище («Московское море») и музыкальным фонтаном.\n• Музей археологии и краеведения — экспозиция об истории края от каменного века до наукограда. Билет — от 200 ₽.\n• Музей истории науки и техники ОИЯИ — уникальные приборы и история ядерной физики. Посещение — бесплатно, по предварительной записи.\n• Парк «Лесная сказка» и сосновые боры — экотропы вдоль Волги, чистый воздух и прекрасная природа.\n• Шлюз №1 канала имени Москвы — впечатляющее гидротехническое сооружение 1937 года.\n\nКак добраться: автобус №401 от м. Савёловская (2 ч) — от 400 ₽. Электричка с Савёловского вокзала (2,5 ч) — от 500 ₽. На автомобиле по Дмитровскому шоссе — около 2 ч.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Volga_Dubna_Bridge.jpg/960px-Volga_Dubna_Bridge.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/RZD_Bolshaya_Volga_2011-10_1318074807_Dubna_city.jpg/960px-RZD_Bolshaya_Volga_2011-10_1318074807_Dubna_city.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Dubna_New_City-2.jpg/960px-Dubna_New_City-2.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dubna_Lenin_monument.JPG/960px-Dubna_Lenin_monument.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Dubna_Stair_Stalin_Monument.jpg/960px-Dubna_Stair_Stalin_Monument.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moscow_Canal._Monuments_of_Vladimir_Lenin_P5223418_2200.jpg/960px-Moscow_Canal._Monuments_of_Vladimir_Lenin_P5223418_2200.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Dubna_Square_Mira.JPG/960px-Dubna_Square_Mira.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/G._Dubna%2C_Moskovskaya_oblast%27%2C_Russia_-_panoramio.jpg/960px-G._Dubna%2C_Moskovskaya_oblast%27%2C_Russia_-_panoramio.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ivankovskaya_hydroelectric_power_station._-20%C2%B0_C._%2850844005918%29.jpg/960px-Ivankovskaya_hydroelectric_power_station._-20%C2%B0_C._%2850844005918%29.jpg',
		],
		price: 4200,
		days: 2,
		tripTypes: ['познавательный', 'экологический'],
		coords: [37.1674, 56.7332],
	},
	{
		id: 'borovsk',
		name: 'Боровск',
		shortDescription: 'Город фресок, старообрядцев и Циолковского',
		fullDescription:
			'Боровск — маленький город в Калужской области (80 км к юго-западу от Москвы), который называют «городом-музеем под открытым небом». Известен как один из центров русского старообрядчества — здесь в XVII веке была заточена боярыня Морозова. В Боровске 12 лет жил и работал К.Э. Циолковский, основоположник космонавтики.\n\nЧто посетить:\n• Настенные фрески Владимира Овчинникова — более 100 картин на стенах жилых домов по всему городу: пейзажи, исторические сюжеты, портреты. Бесплатно, можно гулять самостоятельно или взять карту маршрута в музее.\n• Пафнутьев-Боровский монастырь — основан в 1444 году преподобным Пафнутием. Мощные крепостные стены, Рождественский собор с фресками XVI века. Вход свободный.\n• Музей-квартира К.Э. Циолковского — мемориальный музей в доме, где учёный жил в 1887–1892 годах. Билет — от 200 ₽.\n• Музей истории Боровска — экспозиция в купеческом доме XIX века, история старообрядчества и жизни уездного города. Билет — от 150 ₽.\n• Городище и торговые ряды — историческое ядро города со смотровой площадкой на реку Протву.\n• Этномир (18 км от города) — крупнейший этнографический парк России с избами, юртами и мастер-классами. Билет — от 600 ₽.\n\nКак добраться: автобус от м. Тёплый Стан до Балабаново (2 ч), далее маршрутка до Боровска (20 мин). Общая стоимость — от 500 ₽. На автомобиле по Киевскому шоссе — около 1,5 ч.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pafnutievo-Borovskiy_Monastery_%28Borovsk%29.jpg/960px-Pafnutievo-Borovskiy_Monastery_%28Borovsk%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Borovsk_Taynitskaya_Tower.jpg/960px-Borovsk_Taynitskaya_Tower.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Pafnutiev_Borovsk_Mitrophan.jpg/960px-Pafnutiev_Borovsk_Mitrophan.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Borovsk_country_02.jpg/960px-Borovsk_country_02.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Borovsk_country_03.jpg/960px-Borovsk_country_03.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pafnutiev_Monastery_entrance_02b.jpg/960px-Pafnutiev_Monastery_entrance_02b.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pafnutiev_Monastery_Storozhevaya_tower_01b.jpg/960px-Pafnutiev_Monastery_Storozhevaya_tower_01b.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pafnutiev_Monastery_Tainizkaya_tower_02j.JPG/960px-Pafnutiev_Monastery_Tainizkaya_tower_02j.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Old_Borovsk_by_A.V.Muratova._Pafnutyev_Monastery_1.jpg/960px-Old_Borovsk_by_A.V.Muratova._Pafnutyev_Monastery_1.jpg',
		],
		price: 5200,
		days: 2,
		tripTypes: ['познавательный', 'религиозный'],
		coords: [36.4876, 55.2099],
	},
	{
		id: 'klin',
		name: 'Клин',
		shortDescription:
			'Город Чайковского с музеем-заповедником и ёлочных игрушек',
		fullDescription:
			'Клин — город в 90 км к северо-западу от Москвы, известный прежде всего как место жизни и творчества великого композитора П.И. Чайковского. Именно здесь были написаны балет «Щелкунчик», Пятая и Шестая симфонии, опера «Иоланта». Город также знаменит старейшим в России производством ёлочных украшений.\n\nЧто посетить:\n• Дом-музей П.И. Чайковского — старейший мемориальный музыкальный музей России (с 1894 года). Сохранена подлинная обстановка, личные вещи и рояль композитора. Билет — от 400 ₽, аудиогид — 200 ₽.\n• Музей ёлочной игрушки «Клинское подворье» — при фабрике «Ёлочка», единственный подобный музей в России. 12 залов об истории новогодних украшений, мастер-класс по росписи игрушки. Экскурсия с мастер-классом — от 700 ₽.\n• Торговые ряды и Соборный комплекс — купеческая застройка XIX века в центре города, Троицкий собор и Воскресенская церковь.\n• Усадьба Демьяново — руины некогда великолепной усадьбы XVIII века, где бывали Чайковский, Васнецов, Менделеев. Живописный запущенный парк с прудами.\n• Дом-музей А.П. Гайдара — писатель жил в Клину в 1938–1941 годах. Билет — от 150 ₽.\n\nКак добраться: электричка с Ленинградского вокзала (1,5 ч) — от 350 ₽. На автомобиле по Ленинградскому шоссе — около 1 ч.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Klin._Tchaikovsky_State_House-Museum._Main_house_P8120338_2800.jpg/960px-Klin._Tchaikovsky_State_House-Museum._Main_house_P8120338_2800.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Klin._Tchaikovsky_State_House-Museum._Outbuilding_P8120339_2800.jpg/960px-Klin._Tchaikovsky_State_House-Museum._Outbuilding_P8120339_2800.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Klin._Tchaikovsky_State_House-Museum_%28exposition%29_P8120354_3150.jpg/960px-Klin._Tchaikovsky_State_House-Museum_%28exposition%29_P8120354_3150.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Klin_Chaikovskiy_Museum_%286%29.jpg/960px-Klin_Chaikovskiy_Museum_%286%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Klin_Chaikovskiy_Museum_Gates.jpg/960px-Klin_Chaikovskiy_Museum_Gates.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Klin._Tchaikovsky_State_House-Museum_%28exposition%29_P8120344_3090.jpg/960px-Klin._Tchaikovsky_State_House-Museum_%28exposition%29_P8120344_3090.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Klin._Tchaikovsky_State_House-Museum_%28exposition%29_P8120351_3165.jpg/960px-Klin._Tchaikovsky_State_House-Museum_%28exposition%29_P8120351_3165.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sovetskaya_Square_%28Klin_City%2C_Moscow_Oblast%2C_Russia%29.jpg/960px-Sovetskaya_Square_%28Klin_City%2C_Moscow_Oblast%2C_Russia%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Klin_view_58.jpg/960px-Klin_view_58.jpg',
		],
		price: 2800,
		days: 1,
		tripTypes: ['познавательный'],
		coords: [36.7253, 56.3375],
	},
	{
		id: 'zaraisk',
		name: 'Зарайск',
		shortDescription: 'Самый маленький полностью сохранившийся кремль России',
		fullDescription:
			'Зарайск — тихий городок в 160 км к юго-востоку от Москвы на живописном берегу реки Осётр. Первое упоминание города — 1146 год. Главная гордость — полностью сохранившийся кремль XVI века, самый маленький каменный кремль в России. Город связан с именами Достоевского, скульптора Голубкиной и художника Пожалостина.\n\nЧто посетить:\n• Зарайский кремль (1528–1531) — единственный в Подмосковье полностью сохранившийся кремль с 7 башнями и стенами. Внутри — Никольский и Иоанно-Предтеченский соборы. Территория открыта бесплатно.\n• Музей «Зарайский кремль» — коллекция включает живопись (Репин, Бакст, Молинари), палеолитическую стоянку с фигуркой бизона (датировка ~22 000 лет). Билет — от 300 ₽.\n• Дом-музей скульптора А.С. Голубкиной — мемориальный музей первой русской женщины-скульптора, ученицы Родена. Билет — от 200 ₽.\n• Водонапорная башня — отреставрированная инженерная постройка начала XX века, смотровая площадка с видом на город. Подъём — от 100 ₽.\n• Улица Красноармейская (бывшая Старая Московская) — купеческие дома XVIII–XIX веков, атмосфера уездного города.\n• Троицкая церковь — действующий храм XVII века с красивым иконостасом.\n\nКак добраться: автобус №330 от м. Котельники (2,5 ч) — от 500 ₽. На автомобиле по трассе М4 «Дон» — около 2 ч.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/6/60/Zaraysk_kremlin_nicolskaya_tower.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%D0%9A%D0%B0%D1%80%D0%B0%D1%83%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%B1%D0%B0%D1%88%D0%BD%D1%8F_%D0%B7%D0%B0%D1%80%D0%B0%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%9A%D1%80%D0%B5%D0%BC%D0%BB%D1%8F_2025_01.jpg/960px-%D0%9A%D0%B0%D1%80%D0%B0%D1%83%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%B1%D0%B0%D1%88%D0%BD%D1%8F_%D0%B7%D0%B0%D1%80%D0%B0%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%9A%D1%80%D0%B5%D0%BC%D0%BB%D1%8F_2025_01.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/%D0%97%D0%B0%D1%80%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B5%D0%BC%D0%BB%D1%8C%2C_%D0%9A%D0%B0%D0%B7%D1%91%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B1%D0%B0%D1%88%D0%BD%D1%8F_%28%D0%B2%D0%B8%D0%B4_%D0%B8%D0%B7_%D0%BD%D1%83%D1%82%D1%80%D0%B8_%D0%BA%D1%80%D0%B5%D0%BC%D0%BB%D1%8F%29.JPG/960px-%D0%97%D0%B0%D1%80%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B5%D0%BC%D0%BB%D1%8C%2C_%D0%9A%D0%B0%D0%B7%D1%91%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B1%D0%B0%D1%88%D0%BD%D1%8F_%28%D0%B2%D0%B8%D0%B4_%D0%B8%D0%B7_%D0%BD%D1%83%D1%82%D1%80%D0%B8_%D0%BA%D1%80%D0%B5%D0%BC%D0%BB%D1%8F%29.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5_%D0%B2%D0%BE%D1%80%D0%BE%D1%82%D0%B0_%D0%B7%D0%B0%D1%80%D0%B0%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%9A%D1%80%D0%B5%D0%BC%D0%BB%D1%8F_2025_01.jpg/960px-%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5_%D0%B2%D0%BE%D1%80%D0%BE%D1%82%D0%B0_%D0%B7%D0%B0%D1%80%D0%B0%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%9A%D1%80%D0%B5%D0%BC%D0%BB%D1%8F_2025_01.jpg',
		],
		price: 2500,
		days: 1,
		tripTypes: ['познавательный'],
		coords: [38.8745, 54.7624],
	},
	{
		id: 'pereslavl',
		name: 'Переславль-Залесский',
		shortDescription: 'Город Золотого кольца на берегу Плещеева озера',
		fullDescription:
			'Переславль-Залесский — древний город Золотого кольца в 140 км к северо-востоку от Москвы, основанный Юрием Долгоруким в 1152 году. Расположен на берегу Плещеева озера — одного из самых красивых озёр центральной России. Здесь родился Александр Невский, а юный Пётр I строил свою «потешную флотилию», положившую начало русскому флоту.\n\nЧто посетить:\n• Музей-усадьба «Ботик Петра I» — старейший провинциальный музей России (с 1803 года). Здесь хранится бот «Фортуна» — единственный сохранившийся корабль потешной флотилии. Билет — от 200 ₽, единый — от 400 ₽.\n• Синий камень — легендарный ритуальный валун на берегу Плещеева озера, священный объект язычников-мерян. Подход — от 100 ₽.\n• Шесть древних монастырей — Горицкий (музей-заповедник, билет от 200 ₽), Никитский (основан в XII веке), Никольский, Фёдоровский, Троице-Данилов и Свято-Преображенский.\n• Спасо-Преображенский собор (1157) — один из старейших белокаменных храмов России, домонгольская постройка.\n• Музей утюга, Музей чайника, Музей хитрости и смекалки — забавные частные музеи, по 200–300 ₽ за вход.\n• Железнодорожный музей (Музей паровозов в Талицах) — коллекция узкоколейной техники, можно прокатиться на дрезине. Билет — от 200 ₽.\n• Национальный парк «Плещеево озеро» — дендрарий с 600 видами растений, экотропы. Вход — от 100 ₽.\n\nКак добраться: автобус от Щёлковского автовокзала (2,5 ч) — от 550 ₽. На автомобиле по Ярославскому шоссе — около 2 ч. Рекомендуем 2 дня, чтобы успеть осмотреть все достопримечательности.',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pereslavl-Zalessky%2C_%D0%9F%D0%B5%D1%80%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C-%D0%97%D0%B0%D0%BB%D0%B5%D1%81%D1%81%D0%BA%D0%B8%D0%B9_3.jpg/960px-Pereslavl-Zalessky%2C_%D0%9F%D0%B5%D1%80%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C-%D0%97%D0%B0%D0%BB%D0%B5%D1%81%D1%81%D0%BA%D0%B8%D0%B9_3.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pereslavl_GoritskyMon_Cathedral_P92.jpg/960px-Pereslavl_GoritskyMon_Cathedral_P92.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Pereslavl-Zalessky_Saint_Vladimirs_Cathedral_IMG_1099_1725.jpg/960px-Pereslavl-Zalessky_Saint_Vladimirs_Cathedral_IMG_1099_1725.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ple-oz-view01.jpg/960px-Ple-oz-view01.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pereslavl_Kremlin.JPG/960px-Pereslavl_Kremlin.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Pereslavl_SpasoPreobrazhenskyCathedral.JPG/960px-Pereslavl_SpasoPreobrazhenskyCathedral.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cathedral_of_Saint_Nikita_Martyr_%28Nikitsky_Monastery%2C_Pereslavl-Zalessky%29_03.jpg/960px-Cathedral_of_Saint_Nikita_Martyr_%28Nikitsky_Monastery%2C_Pereslavl-Zalessky%29_03.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Pereslavl-Zalessky%2C_%D0%9F%D0%B5%D1%80%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C-%D0%97%D0%B0%D0%BB%D0%B5%D1%81%D1%81%D0%BA%D0%B8%D0%B9_1.jpg/960px-Pereslavl-Zalessky%2C_%D0%9F%D0%B5%D1%80%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C-%D0%97%D0%B0%D0%BB%D0%B5%D1%81%D1%81%D0%BA%D0%B8%D0%B9_1.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Pereslavl-Zalessky%2C_%D0%9F%D0%B5%D1%80%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C-%D0%97%D0%B0%D0%BB%D0%B5%D1%81%D1%81%D0%BA%D0%B8%D0%B9_4.jpg/960px-Pereslavl-Zalessky%2C_%D0%9F%D0%B5%D1%80%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C-%D0%97%D0%B0%D0%BB%D0%B5%D1%81%D1%81%D0%BA%D0%B8%D0%B9_4.jpg',
		],
		price: 6000,
		days: 2,
		tripTypes: ['познавательный', 'экологический', 'религиозный'],
		coords: [38.8518, 56.7333],
	},
]
