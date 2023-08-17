import { TextField, Button, Box, Alert, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";

const Registration = () => {
    const [error, setError] = useState({
        status:false,
        msg:"",
        type: ""

    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email:data.get('email'),
            name:data.get('name'),
            password:data.get('password'),
            password_confirmation:data.get('password_confirmation'),
            tc:data.get('tc'),
        }
        //console.log(actualData);
        if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
            if (actualData.password === actualData.password_confirmation) {
              console.log(actualData);
              document.getElementById('registration-form').reset()
              setError({ status: true, msg: "Registration Successful", type: 'success' })
              navigate('/')
            } else {
              setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
            }
          } else {
            setError({ status: true, msg: "All Fields are Required", type: 'error' })
          }
        }
  return <>
  <Box component='form' noValidate sx={{mt:1}} id='registration-form' onSubmit={handleSubmit}>
    <TextField margin='normal' required fullWidth id='name' name='name' label ='Name' />
    <TextField margin='normal' required fullWidth id='email' name='email' label ='Email Address' />

    <TextField margin='normal' required fullWidth id='password' name='password' label ='Password' type='password'/>
    <TextField margin='normal' required fullWidth id='password_confirmation ' name='password_confirmation' label ='Confirm Password' type='password'/>
    <FormControlLabel control={<Checkbox value='agree' color='primary' name="tc" id="tc"/>} label='I agree to terms and conditions.'/>

    <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}> Sign Up</Button>
    </Box>
  {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
  </Box>
  </>
}

export default Registration