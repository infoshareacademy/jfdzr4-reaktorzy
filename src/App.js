import { ProgressContexProvider } from "./components/context/ProgressContex";
import { UserActivityProvider } from './controllers/user-activity/index'
import { Header } from "./components/header/Header"
import { Content } from './components/content/index'
// import {ThemeProvider} from "./App.styled";
import { AppWrapper } from './components/AppWrapper/AppWrapper'

function App() {

  return (
     <AppWrapper>
      <ProgressContexProvider>
        <UserActivityProvider>
          <Header/>
          <Content />
        </UserActivityProvider>
      </ProgressContexProvider>
     </AppWrapper>
  );
}

export default App;
