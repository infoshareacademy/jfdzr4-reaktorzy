import { useContext } from "react";
import { Wrapper } from "../wrapper/index";
import { ProgressBar } from "../progressBar/Index";
import { Tiles } from "../tiles/Tiles";
import Typography from "@mui/material/Typography";
import { getCurrentDate } from "../../controllers/get-date/getDate";
import { Link } from "react-router-dom";
import { UserContext } from "../../controllers/user-context";

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
          <Typography variant="h4">Hello stranger!</Typography>
          <Link to="/sign-in">Please sign in to see the content!</Link>
        </div>
      )}
    </Wrapper>
  );
};
