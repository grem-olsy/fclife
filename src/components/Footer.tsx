import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-inner'>
				<p className='footer-copy'>
					© 2026 FCLife — Конструктор путешествий по Подмосковью
				</p>
				<Link to='/terms' className='footer-link'>
					Правила использования
				</Link>
			</div>
		</footer>
	)
}
