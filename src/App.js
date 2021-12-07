import { Container, Typography } from "@mui/material";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Answers from "./components/Answers";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Container maxWidth="md">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/answers/:id" element={<Answers />} />
      </Routes>
    </Container>
  );
};

export default App;
