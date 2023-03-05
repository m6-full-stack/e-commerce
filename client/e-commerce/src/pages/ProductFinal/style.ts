import styled from 'styled-components'

export const EitaPorra = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;

  & > div {
    background: linear-gradient(
      180deg,
      #4529e6 31.25%,
      #f1f3f5 31.26%,
      #f1f3f5 100%
    );
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  //INICIO CAR IMG
  .content-card-car {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 100px;

    width: 100%;
    height: 100%;
    max-width: 441pxpx;
    max-height: 355px;
    padding: 24px;

    background: ${(props) => props.theme.grey10};
  }

  .content-card-car img {
    width: 100%;
    height: 100%;
  }
  //FIM CAR IMG

  //INICIO INFO CAR (content)
  .content-year-and-price {
    flex-direction: column;
    align-items: center;

    padding: 28px;

    gap: 24px;

    background: ${(props) => props.theme.grey10};
  }
  .content-year {
    flex-direction: row;
    gap: 12px;
  }
  .border {
    justify-content: center;
    align-items: center;
    width: 51px;
    height: 32px;
    padding: 4px 8px;
    gap: 10px;
    background: ${(props) => props.theme.brand4};
    border-radius: 4px;
  }
  .content-price {
    align-items: flex-start;
  }
  /* FIM INFO CAR */

  /* INICIO DESCRIPTION */
  .content-description {
    background: ${(props) => props.theme.grey10};
    width: 100%;
    height: 325px;
    padding: 36px 28px 32px 28px;
    gap: 32px;
  }
  /* FIM DESCRIPTION */

  /*aside INICIO CARDS MINI-FOTOS */

  aside {
    display: flex;
    gap: 16px;
  }

  /* mini-fotos */
  figure {
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: #fdfdfd;
    border-radius: 4px;
    padding: 36px 44px;
  }
  .content-small-photos-row1 {
    flex-direction: row;
    max-width: 352px;
    gap: 2%;
  }

  .content-small-photos-row1 img {
    background: #e9ecef;
    border-radius: 4px;
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

  /* comment */
  .content-comments {
    background: ${(props) => props.theme.grey10};
    border-radius: 4px;
    padding: 36px 28px;
    gap: 32px;
  }

  .content-comment {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .content-avatar {
    flex-direction: row;
    gap: 13px;
    align-items: center;
    margin-top: 12px;
  }

  .border-initials {
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;

    border: 1px solid ${(props) => props.theme.brand1};
    border-radius: 150px;

    background: ${(props) => props.theme.random4};
  }

  .border-initials {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 0px;
    color: ${(props) => props.theme.whiteFixed};
  }

  .time-pass::before {
    content: '• ';
    color: ${(props) => props.theme.grey3};
    height: 4px;
    margin-right: 8px;
  }

  /* post */
  .content-post {
    background: ${props => props.theme.grey10};
    border-radius: 4px;
  }

  
`
