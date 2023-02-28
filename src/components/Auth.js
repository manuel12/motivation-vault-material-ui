import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Container } from "@mui/material";

import HeaderTitle from "./HeaderTitle";
import LoginForm from "./LoginForm";
import Homepage from "./Homepage";

const Auth = () => {
  return (
    <>
      <Container
        sx={{
          marginTop: "250px",
        }}
      >
        <Router>
          <HeaderTitle />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login/" element={<LoginForm />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
};

export default Auth;
