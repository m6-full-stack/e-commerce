import { ThemeProvider } from "styled-components";
import { Router } from "./Router/Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalProvider/ModalProvider";
import { UserContextProvider } from "./contexts/UserProvider/UserProvider";
import { CommentContextProvider } from "./contexts/CommentProvider/CommentProvider";
import { AnnouncementContextProvider } from "./contexts/AnnouncementProvider/AnnouncementProvide";
import { ProductsContextProvider } from "./contexts/ProductsProvider/ProductsProvider";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalProvider>
        <BrowserRouter>
          <UserContextProvider>
            <AnnouncementContextProvider>
              <ProductsContextProvider>
                <CommentContextProvider>
                  <Router />
                  <GlobalStyle />
                </CommentContextProvider>
              </ProductsContextProvider>
            </AnnouncementContextProvider>
          </UserContextProvider>
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
