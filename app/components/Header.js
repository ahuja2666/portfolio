"use client"
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
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image'



const drawerWidth = 240;
const navItems = [{ name: 'home', url: '/' }, { name: 'works', url: '/work' }, { name: 'about-me', url: '/about' }, { name: 'contact', url: '/contact' }];

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI c
      </Typography>
      <div>
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
        />
      </div>
      hii
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar elevation={0} sx={{ backgroundColor: "#282c33" }} component="nav" >
        <Toolbar className='ml-32 mr-20 max-sm:ml-2 max-sm:mr-0 max-sm:pr-0'>
          <Box
            sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}

          >
            <div className='flex gap-2 items-center'>
              <div>
                <Link href={"/"}><Image
                  src="/logo.png"
                  width={16}
                  height={16}
                  alt="logo"
                /></Link>
              </div>
              <div>
                <Link href={"/"}><h1 className='ml-3 font-bold'>Harshit Ahuja</h1></Link>
              </div>
            </div>
            <div className=' md:hidden'>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <Image
                  src="/hamburger.png"
                  width={24}
                  height={24}
                  alt="hamburger"
                />
              </IconButton>
            </div>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Link href={item?.url} key={item?.name} className='mr-5' >
                <span className='text-[#C778DD]'>#</span><span className='hover:text-[#ABB2BF]'>{item?.name}</span>
              </Link>
            ))}
          </Box>

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}
