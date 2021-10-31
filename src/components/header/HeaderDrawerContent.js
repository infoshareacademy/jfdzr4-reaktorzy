import { Button, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../controllers/user-context";
import { getAuth, signOut } from "firebase/auth";
import "./HeaderDrawerContent.scss";


const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    width: "100%",
    minHeight: "70px",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
  }));

export const HeaderDrawerContent = () => {
  const { isLoggedIn, userName } = useContext(UserContext);
  
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <>
            {!isLoggedIn && (
                <div className="nav__button-container">
                    <Link to="/sign-up" className={"nav__button header__button-signup"}>
                    <ColorButton variant="contained">Sign up</ColorButton>
                    </Link>

                    <Link to="/sign-in" className={"nav__button header__button-login"}>
                    <ColorButton variant="contained">Log in</ColorButton>
                    </Link>
                </div>
            )}

    {isLoggedIn && (
        <div className="nav__button-container">
            <Link to="/profile" className={"nav__button"}>
              <ColorButton variant="contained">Profile</ColorButton>
            </Link>

            <Link to="/history" className={"nav__button"}>
              <ColorButton variant="contained">History</ColorButton>
            </Link>

            <Link to="/eco-actions" className={"nav__button"}>
              <ColorButton variant="contained">Green Events</ColorButton>
            </Link>

            <Link to="/Settings" className={"nav__button"}>
              <ColorButton variant="contained">Settings</ColorButton>
            </Link>

            <ColorButton onClick={handleLogout} variant="contained">Logout</ColorButton>

        </div>
    )}
      
    </>
  );
};
