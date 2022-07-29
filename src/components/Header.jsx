import {Link, useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const Header = () => {
	const navigate = useNavigate();

	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position='static'>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<ArrowCircleLeftIcon
						size='large'
						edge='start'
						color='inherit'
						sx={{mr: 15, cursor: 'pointer'}}
						onClick={() => navigate(-1)}
					></ArrowCircleLeftIcon>
					<Link to='/' className='link'>
						<LocalDiningIcon sx={{mr: 1, cursor: 'pointer'}} />
					</Link>
					<Typography variant='h6' noWrap component='div'>
						<Link to='/' className='link'>
							<span className='app-title' style={{fontSize: '20px'}}>
								Recipe App
							</span>
						</Link>
					</Typography>
					<ArrowCircleRightIcon
						size='large'
						edge='start'
						color='inherit'
						sx={{ml: 15, cursor: 'pointer'}}
						onClick={() => navigate(1)}
					></ArrowCircleRightIcon>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
