import {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';

import {fetchRecipe} from '../store/RecipeSlice';

function createData(name, calories, fat, carbs, protein) {
	return {name, calories, fat, carbs, protein};
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Recipe = () => {
	const dispatch = useDispatch();
	const {id} = useParams();

	useEffect(() => {
		dispatch(fetchRecipe(id));
	}, [dispatch, id]);

	const recipe = useSelector(state => state.recipe.recipe);

	return (
		<>
			{recipe.map(item => {
				return (
					<ul key={item.idMeal}>
						<li>
							<img height='500px' src={item.strMealThumb} alt={item.idMeal} />
						</li>
						<li>
							<h2>{item.strMeal}</h2>
						</li>
						<li style={{paddingRight: '30%'}}>{item.strInstructions}</li>
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
								<li style={{marginTop: '3rem'}}>
									<h3>Video recipe</h3>
								</li>
								<li>
									<iframe
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
