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

const ResipesItem = ({strMeal, strMealThumb}) => {
	return (
		<Grid item xs={8} md={3}>
			<Card sx={{height: '100%', backgroundColor: '#e1f5fe'}}>
				<CardMedia
					component='img'
					alt={strMeal}
					height='200'
					image={strMealThumb}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{strMeal}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' variant='contained' className='btn btn-primary'>
						Watch recipe
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ResipesItem;
