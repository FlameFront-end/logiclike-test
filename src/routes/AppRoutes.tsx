import { HashRouter, Route, Routes } from 'react-router-dom'

import HomePage from '../pages/HomePage/HomePage.tsx'

const AppRoutes = () => {
	return (
		<HashRouter>
			<Routes>
				<Route element={<HomePage />} path='/' />
			</Routes>
		</HashRouter>
	)
}

export default AppRoutes
