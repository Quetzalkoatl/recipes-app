import {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {LinearProgress} from '@mui/material';

import {fetchRecipe} from '../store/RecipeSlice';

const Recipe = () => {
	const dispatch = useDispatch();
	const {id} = useParams();

	useEffect(() => {
		dispatch(fetchRecipe(id));
	}, [dispatch, id]);

	const recipe = useSelector(state => state.recipe);

	return (
		<>
			{recipe.status === 'loading' && <LinearProgress sx={{m: '2rem'}} />}
			{recipe.status === 'rejected' && <h2>{recipe.error}</h2>}
			{recipe.recipe.map(item => {
				return (
					<ul key={item.idMeal}>
						<li>
							<img
								className='recipe-img'
								src={item.strMealThumb}
								alt={item.idMeal}
							/>
						</li>
						<li>
							<h2>{item.strMeal}</h2>
						</li>
						<li className='recipe-instructions'>{item.strInstructions}</li>
						<li style={{margin: '2rem 0'}}>
							<table className='table'>
								<thead>
									<tr>
										<th>Ingredient</th>
										<th>Measure</th>
									</tr>
								</thead>
								<tbody>
									{Object.keys(item).map(key => {
										if (key.includes('Ingredient') && item[key]) {
											return (
												<tr key={key}>
													<td>{item[key]}</td>
													<td>{item[`strMeasure${key.slice(13)}`]}</td>
												</tr>
											);
										}
										return null;
									})}
								</tbody>
							</table>
						</li>
						{item.strYoutube ? (
							<>
								<li className='video-title' style={{marginTop: '3rem'}}>
									<h3>Video recipe</h3>
								</li>
								<li>
									<iframe
										className='video-recipe'
										width='720'
										height='400'
										title={item.idMeal}
										frameBorder='0'
										style={{marginBottom: '1rem'}}
										src={`https://www.youtube.com/embed/${item.strYoutube.slice(
											-11
										)}`}
										allowFullScreen
									>
										{item.strYoutube}
									</iframe>
								</li>
							</>
						) : null}
					</ul>
				);
			})}
		</>
	);
};

export default Recipe;
