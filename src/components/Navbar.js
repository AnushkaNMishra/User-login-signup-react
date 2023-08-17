import { AppBar,Box, Toolbar, Typography, Button } from "@mui/material"
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return <>
  <Box sx={{flexGrow:1}}>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant='h4' component="div" sx={{flexGrow:1}}>
         Freggies
        </Typography>
        <Button component={NavLink} to='/' style={({isActive}) => { return { backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'wheat',textTransform:'none'}}>Home</Button>
        <Button component={NavLink} to='/contact' style={({isActive}) => { return { backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'wheat',textTransform:'none'}}>Contact</Button>
        <Button component={NavLink} to='/login' style={({isActive}) => { return { backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'wheat',textTransform:'none'}}>Sign in/Sign up</Button>


      </Toolbar>
    </AppBar>
  </Box>
  </>
}

export default Navbar