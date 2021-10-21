import { ProgressContexProvider } from "./components/context/ProgressContex";

import { UserActivityProvider } from "./controllers/user-context";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/index";
// import {ThemeProvider} from "./App.styled";
import { UserActivityProvider } from './controllers/user-activity/index'
import { Header } from "./components/header/Header"
import { Content } from './components/content/index'
import {ThemeProvider} from "./App.styled";

function App() {
  return (

     <ThemeProvider>
      <ProgressContexProvider>
        <UserActivityProvider>
          <Header />
          <Content />
        </UserActivityProvider>
      </ProgressContexProvider>
     </ThemeProvider>
  );
}

export default App;
