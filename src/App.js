import { ProgressContexProvider } from "./components/context/ProgressContex";
import { UserActivityProvider } from "./controllers/user-context";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/index";
import {ThemeProvider} from "./App.styled";
// import { ThemeProvider } from "./App.styled";
import { SubscribeEventProvider } from "./components/context/SubscribeContex";
import { EventContexProvider } from "./components/context/EventContext";
import { EventBannerContextProvider } from "./components/context/EventImage";

function App() {
  return (

    <ThemeProvider>
      <SubscribeEventProvider>
        <EventContexProvider>
          <EventBannerContextProvider>
            <ProgressContexProvider>
              <UserActivityProvider>
                <Header />
                <Content />
              </UserActivityProvider>
            </ProgressContexProvider>
          </EventBannerContextProvider>
        </EventContexProvider>
      </SubscribeEventProvider>
    </ThemeProvider>
  );
}

export default App;
