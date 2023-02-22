import { ThemeProvider } from 'styled-components'
import { Router } from './Router/Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ThemeParagraph, ThemeTitle } from './styles/typography'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <ThemeTkitle tag='h1' titleSize='title1-700' color='blue'>teste</ThemeTkitle> */}
      {/* <ThemeParagraph paragraphSize='body-1-400' color='blue'>teste</ThemeParagraph> */}
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
