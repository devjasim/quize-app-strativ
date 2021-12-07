import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [userData, setUserData] = useState({
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(userData) || {});

    history("/");

    console.log("USERARRAY", userData);
  };

  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ padding: "2rem", textAlign: "center" }} elevation={4}>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "2.5rem",
              }}
              variant="h2"
            >
              Login
            </Typography>
            <Box sx={{ mt: "2rem" }}>
              <TextField
                fullWidth
                variant="outlined"
                label="Admir or User"
                type="text"
                autoComplete="off"
                autoFocus
                name="role"
                value={userData.role}
                onChange={handleChange}
                required
              />
            </Box>
            <Box sx={{ mt: "2rem" }}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
                autoComplete="off"
                autoFocus
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </Box>
            <Box sx={{ mt: "2rem" }}>
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                autoComplete="off"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </Box>
            <Box sx={{ mt: "2rem" }}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
