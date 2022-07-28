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

const CategoryItem = ({
	strCategory,
	strCategoryThumb,
	strCategoryDescription,
}) => {
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
					alt={strCategory}
					height='200'
					image={strCategoryThumb}
				/>
				<CardContent sx={{flexGrow: '1'}}>
					<Typography gutterBottom variant='h5' component='div'>
						{strCategory}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{strCategoryDescription.substring(0, 60) + '...'}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' variant='contained' className='btn btn-primary'>
						<Link to={`/category/${strCategory}`} className='link'>
							Watch category
						</Link>
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default CategoryItem;
