import {AppBar, Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<>
			<AppBar position='static'>
				<Toolbar sx={{ml: 'auto', mr: 'auto'}}>
					<Link to='/' className='link'>
						<Typography
							variant='h6'
							component='span'
							sx={{textAlign: 'center'}}
						>
							Recipes app
						</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
