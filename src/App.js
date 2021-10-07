
import { ProgressContexProvider } from "./components/context/ProgressContex";
import { UserActivityProvider } from './controllers/user-activity/index'
import { Header } from "./components/header/Header"
import { Navigation } from "./components/navigation/nav"
import { Content } from './components/content/index'




function App() {

  return (
    <>
      <ProgressContexProvider>
        <UserActivityProvider>
          <Header isLoggedIn={true} name={'Rysio'} />
          <Navigation />
          <Content />
        </UserActivityProvider>
      </ProgressContexProvider>
    </>
  );
}

export default App;
