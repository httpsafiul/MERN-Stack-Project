import { LoginAndRegnWrapper } from "./LoginAndRegistration.styled";
import Grid from '@mui/material/Grid';

const LoginAndRegn = () =>{
    return( 
    <>
    <LoginAndRegnWrapper>
        <Grid container>
            <Grid item lg={7} sm={5} className="loginPagePic">
            <img className='image' alt='shopping' src="../../../Images/log1.png"></img>
            </Grid>
            <Grid item lg={5} sm={7}>
            
            </Grid>
        </Grid>
        </LoginAndRegnWrapper>     
    </>
    );
};

export default LoginAndRegn;