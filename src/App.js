
import { ProgressContexProvider } from "./components/context/ProgressContex";
import { Header} from "./components/header/Header"
import { Navigation } from "./components/navigation/nav"
import { Content } from './components/content/index'




function App() {
 
  return (
    <>
    <ProgressContexProvider>
      <Header isLoggedIn={true} name={'Rysio'}/>
      <Navigation/>
      <Tiles/>
      <ProgressBar/>
    </ProgressContexProvider>
    </>
  );
}

export default App;
