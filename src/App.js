import { Header } from "./components/header/Header"
import { Navigation } from "./components/navigation/nav"
import { ProgressBar } from './components/progressBar/Index'
import { Tiles } from './components/tiles/Tiles'



function App() {
  return (
    <>
      <Navigation />
      <Header isLoggedIn={true} name={'Rysio'} />
      <Tiles />
      <ProgressBar progressLevel={2} />
    </>
  );
}

export default App;
