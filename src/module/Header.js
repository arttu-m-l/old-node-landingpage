import * as React from 'react';
import { Box, AppBar, Toolbar } from '@mui/material';
import MenuCustom from './Out/MenuCustom';

function Header() {
	return (
	<div>
		<AppBar 
			sx={{
				left: 0,
				top: 0,
				position: 'fixed',
				display: 'flex',
				
				background: 'none',
				backgroundColor: 'rgba(0, 0, 0, 0)',
				width: '100vw',
				margin: 0,
			}}
			elevation={0}>

			<Toolbar
				id="palkki"
				//className={styling.appbarWrapper}
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					height: { sm: '10vh', },
					padding: 0,
				}}
			>
				<Box
					style={{
							display: 'flex',
							justifyContent: 'center',
							alignContent: 'center',
							marginLeft: '1rem',
					}}
				>
					<MenuCustom
						style={{
							justifyContent: 'flex-start',
							width: '10%',
						
						}}
					/>
				</Box>
				<div
					style={{
							marginRight: '2vw',
							marginTop: '1vh',
					}}
				>
					
				</div>
			</Toolbar>
		</AppBar>
		
		
		
		
	</div>
	)
}

export default Header;