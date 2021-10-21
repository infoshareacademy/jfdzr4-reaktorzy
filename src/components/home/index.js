import { useContext } from "react";
import { Wrapper } from "../wrapper/index";
import { ProgressBar } from "../ProgressBar/Index";
import { Tiles } from "../tiles/Tiles";
import Typography from "@mui/material/Typography";
import { UserActivity } from "../../controllers/user-activity/index";
import { getCurrentDate } from "../../controllers/get-date/getDate";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";
import './style.scss';

export const Home = () => {
  const { userActivity, setUserActivity, isLoggedIn } =
    useContext(UserActivity);

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
          <Typography variant="h4">
            Hello stranger! Save the future Earth with us
          </Typography>
          <Link to="/sign-in" style={{ color: "#188c18" }}>
            Please sign in to see the content!
          </Link>
          <div className="tree-animation">
            <img src={require('./tree animation/tree.gif')} alt="loading..." />
          </div>
        </div>
      )}
    </Wrapper>
  );
};
