import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Lexend';
    scroll-behavior: smooth;
    scroll-margin: 100px;
  }

  body {
    background: ${(props) => props.theme.grey8};
    min-height: 100%;
  }

  button {
		cursor: pointer;
    border: 0;
    background: transparent;
	}
  ul, ol, li{
        list-style: none;
        
    }

    textarea::placeholder {
      padding: 8px;
    }
    
  a {
		text-decoration: none;
		cursor: pointer;
    :focus{
      box-shadow: none;
    }
	}
  img {
        max-width: 100%;
    }
  section, aside, div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`
