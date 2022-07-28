import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
	Grid,
} from '@mui/material';
import {Link} from 'react-router-dom';

const ResipesItem = ({idMeal, strMeal, strMealThumb}) => {
	return (
		<Grid item xs={8} md={3}>
			<Card
				sx={{
					height: '100%',
					backgroundColor: '#e1f5fe',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<CardMedia
					component='img'
					alt={strMeal}
					height='200'
					image={strMealThumb}
				/>
				<CardContent sx={{flexGrow: '1'}}>
					<Typography gutterBottom variant='h5' component='span'>
						{strMeal}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' variant='contained' className='btn btn-primary'>
						<Link to={`/recipe/${idMeal}`} className='link'>
							Watch recipe
						</Link>
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ResipesItem;
