import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Grid} from '@mui/material';

import {fetchCategories} from '../store/CategoriesSlice';
import CategoryItem from '../components/CategoryItem';

const Home = () => {
	const dispatch = useDispatch();
	const categories = useSelector(state => state.categories.categories);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	return (
		<Grid container spacing={2} sx={{m: 'auto', maxWidth: '75%'}}>
			{categories.map(item => {
				return <CategoryItem key={item.idCategory} {...item} />;
			})}
		</Grid>
	);
};

export default Home;
