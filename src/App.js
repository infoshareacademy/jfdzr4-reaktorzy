
import { ProgressContexProvider } from "./components/context/ProgressContex";
import { Header } from "./components/header/Header"
import { Navigation } from "./components/navigation/nav"
import { Content } from './components/content/index'
import { Tiles } from './components/tiles/Tiles'
import { ProgressBar } from './components/progressBar/Index'




function App() {

  return (
    <>

      <ProgressContexProvider>
        <Header isLoggedIn={true} name={'Rysio'} />
        <Navigation />
        <Tiles />
        <ProgressBar />
      </ProgressContexProvider>
    </>
  );
}

export default App;
