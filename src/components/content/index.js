import { Profile } from "../profile";
import { Switch, Route } from "react-router-dom";
import { ContentStyle } from "./styled";
import { Home } from "../home/index";
import { History } from "../history/History";
import { EcoActions } from "../ecoActions/EcoActions";
import { EventDetails } from "../ecoActions/eventDetails";
import { SignIn, SignUp } from "../sign";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../controllers/user-context";

export const Content = () => {
  const location = useLocation();
  const { isLoggedIn } = useContext(UserContext);
  return (
    <div
      className={`content__wrapper ${
        location.pathname === "/" && !isLoggedIn
          ? "content__wrapper--no-background"
          : ""
      }`}
    >
      <Switch>
        <Route path="/" exact>
          <ContentStyle>
            <Home />
          </ContentStyle>
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route exact path="/eco-actions" component={EcoActions} />
        <Route path="/eco-actions/:id" component={EventDetails} />
        <Route path="/sign-in">
          < SignIn/>
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};
