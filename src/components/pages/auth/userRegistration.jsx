import { TextField, Button, Box, Alert, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const UserResistration = () =>{

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
                name: data.get('name'),
                email: data.get('email'),
                password: data.get('password'),
                confirmPassword: data.get('confirm-password'),
                tc: data.get('tc'),
            }
            if (actualData.email && actualData.password && actualData.name && actualData.tc) {
                if(actualData.password === actualData.confirmPassword){
                    console.log(actualData);
                document.getElementById('registration-form').reset()
                setError({
                    status: true,
                    message: "Login Success",
                    type: 'success'
                })
                navigate('/dashboard');
                }
                else{
                    setError({
                        status: true,
                        message: "Passwords do not match",
                        type: 'error'
                    })
                }
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
                <Box component='form' noValidate sx={{mt:1}} id='registration-form' onSubmit={handelSubmit}>
                    <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
                    <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
                    <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password'/>
                    <TextField margin='normal' required fullWidth id='confirm-password' name='confirm-password' label='Confirm Password' type='password'/>
                    <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to the terms and conditions"/>
                    <Box textAlign='center'>
                        <Button type='submit' variant='contained' sx={{mt: 3, mb: 2, px: 5}}>Register</Button>
                    </Box>
                    {error.status ? <Alert severity={error.type}>{error.message}</Alert> : ''}
                </Box>
            </>
    );
}

export default UserResistration;