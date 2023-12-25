import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/img/1.png';
import '../App.css';
import { Link } from 'react-router-dom';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Project', 'Skills', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <img src={logo} alt='Website Logo' aria-label='Website Logo' width={50}/>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={<Link to={`/${item}`} className='nav-links'>
                    {item}
                </Link>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ display: 'flex', justifyContent: 'space-between', padding: '0'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#fff' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Link to={'/home'}>
              <img src={logo} alt='Website Logo' aria-label='Website Logo' width={50} /> 
            </Link>
          </Box>
          
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', paddingX: '20px', fontFamily: 'Londrina Solid, sans-serif', fontWeight: '300', letterSpacing: '2px'}}>
                <Link to={`/${item}`} className='links'>
                    {item}
                </Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Link to={'/home'}>
              <img src={logo} alt='Website Logo' aria-label='Website Logo' width={50} /> 
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
export default DrawerAppBar;