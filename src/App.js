import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ProgressContexProvider } from "./components/context/ProgressContex";
import { Header } from "./components/header/Header"
import { Navigation } from "./components/navigation/nav"
import { Content } from './components/content/index'
import { Tiles } from './components/tiles/Tiles'
import { ProgressBar } from './components/ProgressBar/Index'
import { History } from "./components/history/History";



function App() {

  return (
    <>
    <Router>
      <ProgressContexProvider>
        <Header isLoggedIn={false} name={'Rysio'} />
        <Navigation />
      
        <Switch>
            <Route path="/" exact>
              <Tiles />
              <ProgressBar />
            </Route>
            <Route path="/history">
              <History/>
            </Route>
        </Switch>
      </ProgressContexProvider>
    </Router>
    </>
  );
}


export default App;
