import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
	return (
		<header className='header'>
			<div className='header-inner'>
				<NavLink to='/' className='logo'>
					<img src='/logo.png' alt='FCLife' className='logo-img' />
					FC<span>Life</span>
				</NavLink>
				<nav className='nav'>
					<NavLink to='/' end>
						Главная
					</NavLink>
					<NavLink to='/constructor'>Конструктор</NavLink>
					<NavLink to='/cities'>Города</NavLink>
					<NavLink to='/map'>Карта</NavLink>
					<NavLink to='/help'>Помощь</NavLink>
				</nav>
			</div>
		</header>
	)
}
