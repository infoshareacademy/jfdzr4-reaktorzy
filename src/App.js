import { Header} from "./components/header/Header"
import { ProgressBar } from './components/ProgressBar/Index'
import {Tiles} from './components/tiles/Tiles'



function App() {
  return (
    <>

    <Header isLoggedIn={true} name={'Rysio'}/>
    <Tiles/>
    <ProgressBar progressLevel={2} />
    </>
  );
}

export default App;
