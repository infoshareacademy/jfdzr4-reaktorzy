import React, { useState, useContext } from "react";
import "./Header.scss";
import Logo from "./logo-eco-friendly.svg";
import { Link } from "react-router-dom";
import { UserActivity } from "../../controllers/user-activity";
import { getAuth, signOut } from "firebase/auth";
// import Avatar from './Avatar-icons-user.svg';

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

export function Header() {
  const { isLoggedIn, setIsLoggedIn, userName } = useContext(UserActivity);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const firstLetterName = userName.charAt(0).toUpperCase();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <header className="header__container">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo-svg" src={Logo} alt="Green  eco tree" />
        </Link>
      </div>
      <div className="header__welcome">Eco Friendly App</div>
      
      {!isLoggedIn && (
        <div className={'header__login-signup-buttons'}>
          <Link to="/sign-up" className={"nav__button header__button-signup"}>
            <ColorButton variant="contained">Sign up</ColorButton>
          </Link>

          <Link to="/sign-in" className={"nav__button header__button-login"}>
            <ColorButton variant="contained">Log in</ColorButton>
          </Link>
        </div>
      )}

      {isLoggedIn && (
        <>
          <div className={"header__navigation"}>
            <Link to="/profile" className={"nav__button"}>
              <ColorButton variant="contained">Profile</ColorButton>
            </Link>

            <Link to="/history" className={"nav__button"}>
              <ColorButton variant="contained">History</ColorButton>
            </Link>

            <Link to="/eco-actions" className={"nav__button"}>
              <ColorButton variant="contained">Green Events</ColorButton>
            </Link>
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                  <Avatar sx={{ width: 32, height: 32, backgroundColor: 'white', color: 'rgb(24, 140, 24)' }}>
                    {firstLetterName}
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </>
      )}
    </header>
  );
}
