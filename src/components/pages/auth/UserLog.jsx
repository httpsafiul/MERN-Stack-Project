import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const UserLogin = () => {
    const [error, setError] = useState({
        status: false,
        message: "",
        type: ""
    })

    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        if (actualData.email && actualData.password) {
            console.log(actualData);
            document.getElementById('login-form').reset()
            setError({
                status: true,
                message: "Login Success",
                type: 'success'
            })
            navigate('/dashboard');
        }
        else {
            setError({
                status: true,
                message: "All Fileds Are Required",
                type: 'error'
            })
        }
    }
    return(
        <>
            <Box component='form' noValidate sx={{mt:1}} id='login-form' onSubmit={handelSubmit}>
                <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
                <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password'/>
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{mt: 3, mb: 2, px: 5}}>Login</Button>
                </Box>
                <NavLink to='/sendPasswordResetEmail'>Forgot Password</NavLink>
                {error.status ? <Alert severity={error.type}>{error.message}</Alert> : ''}
            </Box>
        </>
    );
}

export default UserLogin;