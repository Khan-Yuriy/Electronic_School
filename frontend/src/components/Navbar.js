import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar( {isSubmitted, onSubmit} ) {
  const style={backgroundColor:'black'};

  const handleSubmit = () => { 
    onSubmit(false);
  }

  let button;
  if(isSubmitted){
    button = <a style={{textDecoration:'none', color:'white'}} href='/'>
      <Button color="inherit" onSubmit={handleSubmit}>Logout</Button>
      </a>
  } else {
    button = <Typography>
      <a style={{textDecoration:'none', color:'white'}} href='/register'>
        <Button color="inherit">Login</Button>
      </a>
      <a style={{textDecoration:'none', color:'white'}} href='/register'>
        <Button color="inherit">Register</Button>
      </a>
    </Typography>
  }

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={style}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Electronic School
          </Typography>
            {button}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
