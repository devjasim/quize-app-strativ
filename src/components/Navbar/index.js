import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const classes = styles();

  const history = useNavigate();

  const location = useLocation();

  const [userData, setUser] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userData")) || []);
  }, [location]);

  const logout = () => {
    console.log("WORK");
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          ailign="center"
        >
          Quiz App
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {userData ? (
          <div className={classes.profile}>
            <Typography className={classes.role} variant="h6">
              {" "}
              {userData.role}{" "}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
