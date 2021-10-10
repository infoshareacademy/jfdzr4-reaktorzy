import { ProgressContexProvider } from "./components/context/ProgressContex";
import { UserActivityProvider } from './controllers/user-activity/index'
import { Header } from "./components/header/Header"
import { Navigation } from "./components/navigation/nav"
import { Content } from './components/content/index'
import { AppWrapper } from './components/AppWrapper/AppWrapper'

function App() {

  return (
    // <AppWrapper>
      <ProgressContexProvider>
        <UserActivityProvider>
          <Header/>
          <Navigation />
          <Content />
        </UserActivityProvider>
      </ProgressContexProvider>
    // </AppWrapper>
  );
}


export default App;
