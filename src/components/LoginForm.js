import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const LoginForm = () => {
  const [isLoginView, setLoginView] = useState(true);
  const toggleViewClickedHandler = (bool) => {
    setLoginView(bool);
  };

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

              {isLoginView ? (
                <p onClick={() => toggleViewClickedHandler(false)}>
                  <Typography align="center">
                    You already have an account?{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "orange",
                        cursor: "pointer",
                      }}
                    >
                      Register here!
                    </span>
                  </Typography>
                </p>
              ) : (
                <p onClick={() => toggleViewClickedHandler(true)}>
                  <Typography align="center">
                    You already have an account?{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "orange",
                        cursor: "pointer",
                      }}
                    >
                      Login here!
                    </span>
                  </Typography>
                </p>
              )}
            </Box>
          </Stack>
        </Box>
      </Container>
    </main>
  );
};

export default LoginForm;
