import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<Router>
				<Header />
				<main className='container content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;