import * as React from 'react';
import { Box, Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { PhotoCameraBack as PhotoCameraBackIcon, Create as CreateIcon, 
  MenuBook as MenuBookIcon, Menu as MenuIcon, Info as InfoIcon, Hotel as HotelIcon,
  Navigation as NavitationIcon, School as SchoolIcon, Phone as PhoneIcon, Home as HomeIcon,
} from '@mui/icons-material';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import "./MenuCustom.css";

export default function MenuCustom() {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (value) => {
    if (value === "info") {
        scroller.scrollTo('info-kortti', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }
    else if (value === 'ilmo') {
        scroller.scrollTo('ilmo-kortti', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }
    else if (value === 'kpp') {
        scroller.scrollTo('kpp-kortti', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }
    else if (value === 'majo') {
      scroller.scrollTo('majo-kortti', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
      });
    }
    else if (value === 'valo') {
      scroller.scrollTo('valo-kortti', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
      });
    }
    else if (value === 'tied') {
      scroller.scrollTo('tied-kortti', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
      });
    }
    else if (value === 'yhteys') {
      scroller.scrollTo('yhteys-kortti', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
      });
    }
    else if (value === 'koti') {
      scroller.scrollTo('uloinLaatikko', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
      });
    }
    setAnchorEl(null);
}
    

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    // Muutettu valikko, jossa voi kustomisoida ikonin valikkoalkion viereen
    <Box
    >
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          color: '#fff',
        }}
      >
        <MenuIcon
          sx={{
            fontSize: {
              xs: '8.5vw',
              sm: '6.5vw',
              md: '3.5vw',
              lg: '3vw',
            },
            color: '#fff'
          }}
        />
      </IconButton>

      <Menu
        disableScrollLock={true}
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          id="koti"
          onClick={()=>handleMenuItemClick("koti")}
        >
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Header"
          />
        </MenuItem>
        <MenuItem
          id="info"
          onClick={()=>handleMenuItemClick("info")}
        >
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Header #1"
          />
        </MenuItem>
        <MenuItem
          id="ilmo"
          onClick={()=>handleMenuItemClick("ilmo")}
        >
          <ListItemIcon>
            <CreateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Header #2"
          />
        </MenuItem>
        <MenuItem
          id="kpp"
          onClick={()=>handleMenuItemClick("kpp")}
        >
          <ListItemIcon>
            <NavitationIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Header #3"
          />
        </MenuItem>
        <MenuItem
          id="majo"
          onClick={()=>handleMenuItemClick("majo")}
        >
          <ListItemIcon>
            <HotelIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Header #4"
          />
        </MenuItem>
        <MenuItem
          id="valo"
          onClick={()=>handleMenuItemClick("valo")}
        >
          <ListItemIcon>
            <PhotoCameraBackIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Header #5"
          />
        </MenuItem>
        <MenuItem
          id="tied"
          onClick={()=>handleMenuItemClick("tied")}
        >
          <ListItemIcon>
            <SchoolIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Header #6"
          />
        </MenuItem>
        <MenuItem
          id="yhteys"
          onClick={()=>handleMenuItemClick("yhteys")}
        >
          <ListItemIcon>
            <PhoneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Contact Info"
          />
        </MenuItem>
      </Menu>
    </Box>
  );
}
