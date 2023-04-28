'use client';
import React, { useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useRouter, usePathname } from 'next/navigation';
import Grid from '@mui/material/Unstable_Grid2';

export default function ButtonAppBar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, pathname: string) => {
    console.log('NEXT_PUBLIC_BACK_END_POINT', process.env.NEXT_PUBLIC_BACK_END_POINT);
    if (event.ctrlKey) {
      window.open(pathname, '_blank');
    } else {
      router.push(pathname);
    }
  };

  const linkButton = (text: string, path: string) => {
    return (
      <Grid xs='auto' container className='link__wrapper' sx={{ display: 'flex' }} alignItems={'center'}>
        <Button variant={pathname == path ? 'contained' : undefined} onClick={event => handleClick(event, path)}>
          <p className='link__text'>{text}</p>
        </Button>
      </Grid>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          {linkButton('Home', '/')}
          {linkButton('Search', '/search')}
          {linkButton('Dashboard', '/dashboard')}
          {linkButton('server-client-render', '/server-client-render')}
          {linkButton('ssr', '/ssr')}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
