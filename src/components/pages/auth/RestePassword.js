import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RestePassword = () => {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
        password: data.get('password'),
        confirmPassword: data.get('confirm-password'),
    };
    if (actualData.password && actualData.confirmPassword) {
      if(actualData.password === actualData.confirmPassword) {
        console.log(actualData);
        document.getElementById("password-reset-form").reset();
        setError({
          status: true,
          message: "Password Has Been Reset",
          type: "success",
        });
        setTimeout(()=>{
            navigate('/loginAndRegn');
        }, 3000)
      }
      else{
        setError({
            status: true,
            message: "Passwords Don't Match",
            type: "error",
          });
      }
    } else {
      setError({
        status: true,
        message: "All Fields Are Required",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container justifyContent="center" textAlign="center">
        <Grid item sm={6} xs={12}>
          <h1>Reset Password</h1>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-reset-form"
            onSubmit={handelSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirm-password"
              name="confirm-password"
              label="Confirm Password"
              type="password"
            />

            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Confirm
              </Button>
            </Box>
            {error.status ? (
              <Alert severity={error.type}>{error.message}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RestePassword;
