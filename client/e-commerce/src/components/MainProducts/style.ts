import styled from 'styled-components'

export const MainProductsStyle = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.grey8};
  /* margin-top: -2035px; */

  .divCommentsProduct {
    width: 50%;
    background-color: #fdfdfd;
    margin-left: 9%;
  }

  .titleComments {
    margin-top: 10px;
    margin-bottom: -20px;
    font-size: 20px;
  }

  .divCommentsProduct {
    margin-top: 25px;
    background-color: #fdfdfd;
    padding: 35px;
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
    width: 142%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
  }
`
