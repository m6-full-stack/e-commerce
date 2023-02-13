import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { ThemeParagraph, ThemeTitle } from "./styles/typography"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <ThemeTitle tag='h1' titleSize='title1-700' color='blue'>teste</ThemeTitle> */}
      {/* <ThemeParagraph paragraphSize='body-1-400' color='blue'>teste</ThemeParagraph> */}
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
