import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, color: '#E762D7FF' }}>
      <AppBar position='static' sx={{ color: '#E762D7FF' }}>
        {/* <Toolbar> */}
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>          
            <Button component={Link} href="/" sx={{ my: 2, color: 'white', display: 'block' }}>
              Rick and Morty
            </Button>
            <Button component={Link} href="/characterindex" sx={{ my: 2, color: 'white', display: 'block' }}>
              Character Index
            </Button>
          </Box>
        {/* </Toolbar> */}
      </AppBar>
    </Box>
  );
}

