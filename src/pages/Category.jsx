import {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {Grid} from '@mui/material';

import {fetchCategoryRecipes} from '../store/CategoryRecipes';
import ResipesItem from '../components/ResipesItem';

const Category = () => {
	const dispatch = useDispatch();
	const {name} = useParams();

	useEffect(() => {
		dispatch(fetchCategoryRecipes(name));
	}, [dispatch, name]);

	const recipes = useSelector(state => state.categoryRecipes.categoryRecipes);

	return (
		<Grid container spacing={2} sx={{m: '1rem', maxWidth: '98%'}}>
			{recipes.map(recipe => {
				return <ResipesItem key={recipe.idMeal} {...recipe} />;
			})}
		</Grid>
	);
};

export default Category;
