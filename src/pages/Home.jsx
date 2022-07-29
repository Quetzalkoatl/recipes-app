import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Grid, TextField, LinearProgress} from '@mui/material';

import {fetchCategories} from '../store/CategoriesSlice';
import CategoryItem from '../components/CategoryItem';

const Home = () => {
	const dispatch = useDispatch();
	const categories = useSelector(state => state.categories);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	return (
		<>
			{/* <TextField
				sx={{width: '30%', minWidth: '300px'}}
				className='search-bar'
				id='outlined-basic'
				label='Search'
				variant='filled'
			/> */}
			{categories.status === 'loading' && <LinearProgress sx={{m: '2rem'}} />}
			{categories.status === 'rejected' && <h2>{categories.error}</h2>}
			<Grid
				container
				spacing={2}
				sx={{m: 'auto', maxWidth: '75%'}}
				columns={{xs: 4, sm: 8, md: 12}}
			>
				{categories.categories.map(item => {
					return <CategoryItem key={item.idCategory} {...item} />;
				})}
			</Grid>
		</>
	);
};

export default Home;
