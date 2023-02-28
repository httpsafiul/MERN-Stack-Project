import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';


const Dashboard = () => {
    const navigate = useNavigate();
    const handelLogout = () =>{
        console.log("Logut Clicked");
        navigate('/loginAndRegn')
    }

  return (
    <>
        <CssBaseline />
        <Grid container>
            <Grid item sm={4} sx = {{ backgroundColor: 'gray', p: 5, color: 'white' }}>
                <Typography variant='h5'> Email: safi@gmail.com </Typography>
                <Typography variant='h6'> Name: Safiul </Typography>
                <Button variant='contained' color='warning' size='large' onClick={handelLogout} sx={{ mt: 8 }}>Logut</Button>
            </Grid>
            <Grid ml='20px' item sm={6}>
                <ChangePassword />
            </Grid>
        </Grid>
    </>
  );
}

export default Dashboard
