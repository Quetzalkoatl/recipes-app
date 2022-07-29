import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<Router basename='/recipes-app'>
				<Header />
				<main className='container content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/category/:name' element={<Category />} />
						<Route path='/recipe/:id' element={<Recipe />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
