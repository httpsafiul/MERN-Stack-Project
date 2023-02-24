import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';


const Navbar = () =>{
    return <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop Everything
          </Typography>
          <Button component={NavLink} to='/' style={({ isActive }) =>{ return {backgroundColor: isActive ? 'rgb(33 82 173)' : ''}}} color="inherit">Home</Button>
          <Button component={NavLink} to='/contact' style={({ isActive }) =>{ return {backgroundColor: isActive ? 'rgb(33 82 173)' : ''}}} color="inherit">Contact</Button>
          <Button component={NavLink} to='/loginAndRegn' style={({ isActive }) =>{ return {backgroundColor: isActive ? 'rgb(33 82 173)' : ''}}} color="inherit">Login / Registration</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>;
};

export default Navbar;