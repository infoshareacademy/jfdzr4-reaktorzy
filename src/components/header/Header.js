import React, { useState, useContext} from "react";
import "./Header.scss";
import Logo from "./logo-eco-friendly.svg";
import { Link } from 'react-router-dom';
import { UserActivity } from "../../controllers/user-activity";
// import Avatar from './Avatar-icons-user.svg';

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Button from '@mui/material/Button';

import Navigation from "../navigation";

import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgb(24, 140, 24)',
  '&:hover': {
    backgroundColor: 'rgb(24, 140, 24)',
  },
}));

export function Header() {

  const {isLoggedIn, setIsLoggedIn, userName} = useContext(UserActivity)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const firstLetterName = userName.charAt(0).toUpperCase()
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <header className="header__container">
      <div className="header__logo">
      <Link to="/">
        <img className="header__logo-svg" src={Logo} alt="Green  eco tree" />
      </Link>
        
      </div>

      {!isLoggedIn && (
        <>
          {/* <button className={"header__button header__button-signup"}>
            Sign up
          </button> */}
          <ColorButton variant="contained" className={'header__button-signup'}>Sign up</ColorButton>
          {/* <button className={"header__button header__button-login"}>
            Log in
          </button> */}
            <ColorButton variant="contained" className={'header__button-login'} onClick={()=>{setIsLoggedIn(true)}}>Log in</ColorButton>
        </>
      )}

      {isLoggedIn && (
        <>
          <div className="header__welcome">"Welcome Eco {userName}"</div>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32 }}>{firstLetterName}</Avatar>
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
              <Avatar /> Profile
            </MenuItem>
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
            <MenuItem onClick={()=> setIsLoggedIn(false)}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      )}
    </header>
  );
}
