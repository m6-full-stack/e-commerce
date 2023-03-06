import styled from 'styled-components'

export const AsideProductsStyleFinal = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  /*aside INICIO CARDS MINI-FOTOS */

  aside {
    display: flex;
    width: 100%;
    gap: 51px;
  }

  /* mini-fotos */
  figure {
    display: flex;
    width: 100%;
    
    flex-direction: column;
    gap: 32px;
    background: #fdfdfd;
    border-radius: 4px;
    padding: 36px 44px;
    border-radius: 4px;
    /* background: red; */
  }
  
  .content-small-photos-row1 {
    flex-direction: row;
    max-width: 752px;
    gap: 2%;

    min-height: 90px;
  }

  .content-small-photos-row1 img {
    background: #e9ecef;
    border-radius: 4px;
    height: 90px;
    padding: 0px 16px;
  }
  /* fim mini-fotos */

  /* cardUser */
  article {
    display: flex;
    width: 100%;

    border-radius: 4px;

    align-items: center;
  }

  .content-card-user {
    align-items: center;
    gap: 28px;
    background: ${(props) => props.theme.grey10};
    padding: 40px 28px;
    border-radius: 4px;
  }

  .content-initials {
    align-items: center;
    justify-content: center;
    width: 77px;
    height: 77px;
    border: 1px solid ${(props) => props.theme.brand1};
    background: ${(props) => props.theme.brand1};
    border-radius: 150px;
  }

  .content-initials span {
    color: ${(props) => props.theme.whiteFixed};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 26.6538px;
    line-height: 39px;
  }
  /* fim cardUser */
`
