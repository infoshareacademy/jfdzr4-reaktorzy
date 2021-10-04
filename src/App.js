import { Header } from "./components/header/Header"
import { Navigation } from "./components/navigation/nav"
import { Content } from './components/content/index'



function App() {
  return (
    <>
      <Header isLoggedIn={true} name={'Rysio'} />
      <Navigation />
      <Content />
    </>
  );
}

export default App;
