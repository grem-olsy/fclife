import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ConstructorPage from './pages/ConstructorPage'
import CitiesPage from './pages/CitiesPage'
import CityDetailPage from './pages/CityDetailPage'
import HelpPage from './pages/HelpPage'
import TermsPage from './pages/TermsPage'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Header />
				<main className='main'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/constructor' element={<ConstructorPage />} />
						<Route path='/cities' element={<CitiesPage />} />
						<Route path='/cities/:id' element={<CityDetailPage />} />
						<Route path='/help' element={<HelpPage />} />
						<Route path='/terms' element={<TermsPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
