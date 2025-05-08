import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

/*const menuItems = [
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
*/

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
