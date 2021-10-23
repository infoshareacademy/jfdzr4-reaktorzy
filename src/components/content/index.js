import { Switch, Route } from "react-router-dom";
import { ContentStyle } from "./styled";
import { Home } from "../home/index";
import { Profile } from "../profile";
import { History } from "../history/History";
import { EcoActions } from "../ecoActions/EcoActions";
import { EventDetails } from "../ecoActions/addForm/eventDetails";

import { SignIn, SignUp } from "../sign";
import "./style.css";

export const Content = () => (
  <div className={"content__wrapper"}>
    <Switch>
      <Route path="/" exact>
        <ContentStyle>
          <Home />
        </ContentStyle>
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/history">
        <History />
      </Route>
      <Route path="/eco-actions">
        <EcoActions />
      </Route>
      <Route path="/eco-actions/:id">
        <EventDetails />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
    </Switch>
  </div>
);
