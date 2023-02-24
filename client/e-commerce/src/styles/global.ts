import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Lexend';
  }

  body {
    
    background: ${(props) => props.theme.grey8};
    min-height: 100%;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 1.5px ${(props) => props.theme.brand2};;
}
  button {
		cursor: pointer;
    border: 0;
    background: transparent;
	}
  ul, ol, li{
        list-style: none;
        
    }
    
  a {
		text-decoration: none;
		cursor: pointer;
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
