import {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {Grid, LinearProgress} from '@mui/material';

import {fetchCategoryRecipes} from '../store/CategoryRecipes';
import ResipesItem from '../components/ResipesItem';

const Category = () => {
	const dispatch = useDispatch();
	const {name} = useParams();

	useEffect(() => {
		dispatch(fetchCategoryRecipes(name));
	}, [dispatch, name]);

	const recipes = useSelector(state => state.categoryRecipes);

	return (
		<>
			{recipes.status === 'loading' && <LinearProgress sx={{m: '2rem'}} />}
			{recipes.status === 'rejected' && <h2>{recipes.error}</h2>}
			<Grid
				className='grid-list'
				container
				spacing={2}
				sx={{m: 'auto', maxWidth: '75%'}}
				columns={{xs: 4, sm: 8, md: 12}}
			>
				{recipes.categoryRecipes.map(recipe => {
					return <ResipesItem key={recipe.idMeal} {...recipe} />;
				})}
			</Grid>
		</>
	);
};

export default Category;
