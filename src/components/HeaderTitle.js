import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { CssBaseline } from "@material-ui/core";
import Navbar from "./Navbar";

const HeaderTitle = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          bgcolor: "#1992ff",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "40px 0",
          }}
        >
          <Typography variant="h3" component="h1" align="center">
            Motivation Vault
          </Typography>
        </Toolbar>
        <Navbar />
      </AppBar>
    </>
  );
};

export default HeaderTitle;
