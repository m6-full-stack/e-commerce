import { ThemeProvider } from "styled-components";
import { Router } from "./Router/Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalProvider/ModalProvider";
import { UserContextProvider } from "./contexts/UserProvider/UserProvider";
import { CommentContextProvider } from "./contexts/CommentProvider/CommentProvider";
import { AnnouncementContextProvider } from "./contexts/AnnouncementProvider/AnnouncementProvide";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalProvider>
        <BrowserRouter>
          <UserContextProvider>
            <AnnouncementContextProvider>
              <CommentContextProvider>
                <Router />
                <GlobalStyle />
              </CommentContextProvider>
            </AnnouncementContextProvider>
          </UserContextProvider>
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
