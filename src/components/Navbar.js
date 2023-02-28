import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const pages = {
    Home: "/",
    "Add+": "/add/",
    Books: "/books/",
    Podcast: "/podcasts/",
    "Podcast Episodes": "/podcast-episodes/",
    "Motivational Speeches": "/motivational-speeches/",
    About: "/about/",
    Logout: "/",
  };

  const pagesKeys = Object.keys(pages);
  const pagesValues = Object.values(pages);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavbarItemClicked = (page) => {
    window.location.href = pages[page];
  };

  return (
    <Toolbar
      sx={{
        backgroundColor: "#0059a8",
      }}
    >
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pagesKeys.map((page) => (
            <MenuItem
              key={page}
              onClick={() => {
                handleNavbarItemClicked(page);
              }}
              sx={{
                "&:hover": {
                  backgroundColor: "orange",
                },
              }}
            >
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          width: "100%",
          maxWidth: "1080px",
          mx: "auto",
          justifyContent: "space-around",
        }}
      >
        {pagesKeys.map((page) => (
          <Button
            key={page}
            onClick={(event) => {
              handleNavbarItemClicked(page);
            }}
            sx={{
              my: 2,
              color: "white",
              display: "block",
              "&:hover": {
                backgroundColor: "orange",
              },
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Toolbar>
  );
};

export default Navbar;
