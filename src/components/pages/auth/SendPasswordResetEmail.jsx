import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";

const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
    if (actualData.email) {
      console.log(actualData);
      document.getElementById("password-reset-form").reset();
      setError({
        status: true,
        message: "Password Reset Email Sent. Check Your Email",
        type: "success",
      });
    } else {
      setError({
        status: true,
        message: "Please Provide Valid Email",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container justifyContent="center" textAlign="center">
        <Grid item sm={6} xs={12}>
        <h1>Send Password Reset Email</h1>
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
              id="email"
              name="email"
              label="Email Address"
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Send
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

export default UserLogin;
