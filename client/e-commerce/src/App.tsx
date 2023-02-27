import { ThemeProvider } from 'styled-components'
import { Router } from './Router/Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from './contexts/ModalProvider/ModalProvider'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App
