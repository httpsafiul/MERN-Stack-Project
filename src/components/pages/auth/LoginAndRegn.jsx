import { LoginAndRegnWrapper } from "./LoginAndRegistration.styled";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import UserLogin from "./UserLog";
import UserRegistration from "./userRegistration";


const TabPanel = (props) => {
    // const {children, value, index} = props;
    const children = props.children;
    const index = props.index;
    const value = props.value;

    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

const LoginAndRegn = () => {

    const [value, setValue] = useState(0);
    const handelChange = (event, newValue) => {
        setValue(newValue);
    }

  return (
    <>
      <LoginAndRegnWrapper>
        <Grid container>
          <Grid sx={{display: {xs: 'none', lg: 'block'}}} item lg={7} sm={5} className="loginPagePic">
            <img
              className="image"
              alt="shopping"
              src="../../../Images/log1.png"
            ></img>
          </Grid>
          <Grid item sx={{ display: {xs:'block', lg: 'inline'}, marginLeft: 'auto', marginRight: 'auto' }} lg={4} sm={7} xs={12}>
            <Card sx={{ width: "100%", height: "100% " }}>
              <Box>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                    onChange={handelChange}
                  >
                    <Tab value="one" label="Login" />
                    <Tab value="two" label="Registration" />
                  </Tabs>
                </Box>
                <TabPanel value={value} index="one">
                    <UserLogin/>
                </TabPanel>
                <TabPanel value={value} index="two">
                  <UserRegistration></UserRegistration>
                </TabPanel>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </LoginAndRegnWrapper>
    </>
  );
};

export default LoginAndRegn;
