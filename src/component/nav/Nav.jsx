import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { true_false, } from '../../app/Loginboolencheck'
import {useSelector,useDispatch } from "react-redux"
function Nav() {
   const dispatch=useDispatch()
  const check = useSelector((state) => state.counter.value)
  
  const logout = () =>
  {
    dispatch(true_false())
    }
  const sumbits =async (e) =>
  {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/download');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      a.click();
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
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
       
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            <NavLink to="/" style={{ color: "white", textDecoration:"none" }}>
              Home
          </NavLink>
                  </Typography>
                  <NavLink to="/about" style={{color:"white"}} ><Button color="inherit">About</Button></NavLink>
          <NavLink to="/contact" style={{ color: "white" }} ><Button color="inherit">Contact</Button></NavLink>

          {check?<> <Button onClick={sumbits} color="inherit">Download</Button>
          <Button onClick={logout} color="inherit">Logout</Button>
          </> : <>
          <NavLink to="/login" style={{color:"white"}} ><Button color="inherit">Login</Button></NavLink>
          <NavLink to="/register" style={{color:"white"}} ><Button color="inherit">Register</Button></NavLink>
          </>}
         
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Nav