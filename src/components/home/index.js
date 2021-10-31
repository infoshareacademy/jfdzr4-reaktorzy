
import { useContext } from "react";
import { Wrapper } from "../wrapper/index";
import { getCurrentDate } from "../../controllers/get-date/getDate";
import { UserContext } from "../../controllers/user-context";

import { ProgressBar } from "../progressBar/Index";
import { Tiles } from "../tiles/Tiles";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";
import "./style.scss";


export const Home = () => {
  const { isLoggedIn } = useContext(UserContext);


  return (
    <Wrapper>
      {isLoggedIn ? (
        <>
          <Tiles />
          <ProgressBar progressLevel={2} />
          <h2>{getCurrentDate()}</h2>
        </>
      ) : (
        <div>
          <Typography variant="h2" align="center">
          <p className="home_text_hello_stranger">Hello stranger!</p>
          </Typography>
          <Typography variant="h3" align="center">
          <p className="home_text_save_the_future_Earth">Save the future Earth with us!</p>
          </Typography>
         
          <div className="tree-animation"/>
          <Link to="/sign-in" style={{ textDecoration: 'none' }}>
            <h2 className="sign-in-to-see-the-content">Please sign in to see the content!</h2>
          </Link>
        </div>
      )}
    </Wrapper>
  );
};
