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

export default function AnchorTemporaryDrawer() {
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        p: 3,
      }}
      role="presentation"
      onClick={!isLargeScreen ? toggleDrawer(false) : undefined}
      onKeyDown={!isLargeScreen ? toggleDrawer(false) : undefined}
    >
{/* Avatar Section */}
<Box
  sx={{
    display: { xs: 'flex', lg: 'none' }, // 👈 SHOW on small, HIDE on large
    flexDirection: 'column',
    marginLeft: 2,
    justifyContent: 'flex-start',
    mb: 2,
    width: '100%',
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
  <h6 style={{ margin: 0 }}>User Name</h6>
  <p className="text-muted" style={{ margin: 0 }}>@username</p>
  <p style={{ margin: 0, fontSize: '13px' }}>
    Followers
    <span className="text-muted fw-light" style={{ marginRight: '10px' }}> 100 </span>
    {" "}Following
    <span className="text-muted fw-light"> 100</span>
  </p>
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
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {!isLargeScreen && (
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{ p: 2, m: 1 }}
        >
          <Avatar
            alt="Profile Picture"
            src={GirlCamera}
            sx={{ width: 50, height: 50, border: '2px solid #fff', boxShadow: 2 }}
          />
        </IconButton>
      )}
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
  );
}
