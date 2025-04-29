import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GirlCamera from '../../assets/images/GirlCamera.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const menuItems = [
  { to: '/home', icon: 'bi-house-door', label: 'Home' },
  { to: '/explore', icon: 'bi-search', label: 'Explore' },
  { to: '/notifications', icon: 'bi-bell', label: 'Notifications' },
  { to: '/messages', icon: 'bi-chat-quote', label: 'Messages' },
  { to: '/network', icon: 'bi-people', label: 'Network' },
  { to: '/leads', icon: 'bi-clipboard-plus', label: 'Leads' },
  { to: '/products', icon: 'bi-grid', label: 'Product' },
  { to: '/orders', icon: 'bi-collection', label: 'Orders' },
  { to: '/profile', icon: 'bi-person-circle', label: 'Profile' },
  { to: '/settings', icon: 'bi-gear', label: 'Settings' },
];

export default function NavbarWithDrawer() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const drawerContent = (
    <div className=' w-100'>  
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        px: 3,
      }}
      role="presentation"
      onClick={!isLargeScreen ? toggleDrawer(false) : undefined}
      onKeyDown={!isLargeScreen ? toggleDrawer(false) : undefined}
    >
      {/* Avatar Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Avatar
          alt="Profile Picture"
          src={GirlCamera}
          sx={{
            width: 50,
            height: 50,
            border: '3px solid rgb(253, 253, 253)',
            boxShadow: 3,
            mb: 1,
            mt: 3,
          }}
        />
        <Typography variant="h6" sx={{ m: 0 }}>
          User Name
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ m: 0 }}>
          @username
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '13px', m: 0 }}>
          Followers <span style={{ fontWeight: 300 }}>100</span> Following <span style={{ fontWeight: 300 }}>100</span>
        </Typography>
      </Box>

      {/* Menu List */}
      <List sx={{ width: '100%' }}>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} to={item.to}>
              <ListItemIcon>
                <i className={`bi ${item.icon}`} style={{ fontSize: '1.5rem' }}></i>
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    </div>
  );

  return (
       <div className='w-100'>  
    <Box sx={{ display: 'flex' }}>
      {/* Navbar at the top */}
      <AppBar position="fixed" color="default" sx={{ bgcolor: 'background.paper', boxShadow: 1 }}>
        <Toolbar>
{/* Show avatar button on mobile to toggle drawer */}
{!isLargeScreen && (
  <IconButton
    edge="start"
    color="inherit"
    aria-label="menu"
    onClick={toggleDrawer(true)}
    sx={{ mr: 2 }}
  >
    <Avatar
      alt="Profile Picture"
      src={GirlCamera}
      sx={{ width: 40, height: 40 }}
    />
  </IconButton>
)}
          <Typography variant="h6" noWrap component="div">
            www.brand.com
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant={isLargeScreen ? 'permanent' : 'temporary'}
        open={isLargeScreen ? true : open}
        onClose={toggleDrawer(false)}
        anchor="left"
        sx={{
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
            overflowY: 'auto',
            pt: '64px', // push content down under AppBar
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        }}
      >
        {drawerContent}
      </Drawer>

  
    </Box>
     </div>
  );
}
