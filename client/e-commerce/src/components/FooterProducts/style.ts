import styled from 'styled-components'

export const FooterProductsStyle = styled.footer`
  width: 100%;
  margin-top: 35px;
  margin-bottom: 35px;

  .divCommentsProduct {
    width: 50%;
    background-color: #fdfdfd;
    margin-left: 9%;
    padding: 35px;
  }

  @media (max-width: 1024px) {
    width: 142%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
  }
`
