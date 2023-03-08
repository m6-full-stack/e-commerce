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
    max-width: 422px;
    flex-direction: column;
    gap: 32px;
    background: #fdfdfd;
    border-radius: 4px;
    padding: 36px 44px;
    border-radius: 4px;
    flex-wrap: wrap;
  }

  .content-small-photos-row1 {
    flex-direction: row;
    max-width: 752px;
    gap: 2%;

    min-height: 90px;
  }

  .content-small-img {
  
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;

    overflow: hidden;
  
  }

  .content-small-img img {
    background: #e9ecef;
    border-radius: 4px;
    height: 90px;
  
    width: calc(25% );
    
    
    object-fit: contain;
    &:hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      cursor: pointer;
    }
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
