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
        <Box
          component="form"
          sx={{
            width: "500px",
            mx: "auto",
          }}
        >
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="Enter username"
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              label="Enter password"
              variant="outlined"
            />

            <Box>
              <Button
                variant="contained"
                style={{
                  width: "500px",
                  margin: "10px auto 20px",
                  backgroundColor: "#ffc93d",
                }}
              >
                Login
              </Button>
              <Typography>
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
