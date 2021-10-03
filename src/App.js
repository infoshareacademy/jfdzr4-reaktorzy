import { Header} from "./components/header/Header"
import { Navigation } from "./components/navigation/nav"
import { ProgressBar } from './components/ProgressBar/Index'
import {Tiles} from './components/tiles/Tiles'



function App() {
  return (
    <>
    
    <Header isLoggedIn={true} name={'Rysio'}/>
    <Navigation/>
    <Tiles/>
    <ProgressBar progressLevel={2} />
    </>
  );
}

export default App;
