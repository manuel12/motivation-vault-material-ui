import React from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const LoginForm = () => {
  return (
    <main>
      <Container
        style={{
          marginTop: "200px",
        }}
      >
        <Box component="form">
          <Stack
            spacing={2}
            sx={{
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            <TextField
              id="username-input"
              label="Enter username"
              variant="outlined"
            />

            <TextField
              id="password-input"
              label="Enter password"
              variant="outlined"
            />

            <Box>
              <Button
                variant="contained"
                style={{
                  margin: "10px 150px 20px",
                  width: "200px",
                  backgroundColor: "#ffc93d",
                }}
              >
                Login
              </Button>
              <Typography align="center">
                You already have an account? Register here!
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </main>
  );
};

export default LoginForm;
