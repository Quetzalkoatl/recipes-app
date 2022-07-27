import {AppBar, Toolbar, Typography} from '@mui/material';

const Footer = () => {
	return (
		<>
			<AppBar position='static'>
				<Toolbar sx={{textAlign: 'center'}}>
					{/* <Typography component='div' sx={{flexGrow: 1, margin: 'auto'}}>
							2022
						</Typography> */}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Footer;
