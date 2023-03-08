import styled from 'styled-components'

interface Advertiser {
  advertiserOrBuyer: boolean
}

export const RegisterContainer = styled.div<Advertiser>`
  display: flex;
  width: 100%;
  padding: 0 1rem;

  flex-direction: column;
  align-items: center; // centro - horizontal

  background: ${(props) => props.theme.grey8};

  //background externo
  & > div {
    display: flex;
    width: 100%;
    max-width: 411px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 32px;

    margin-top: 204px;
    margin-bottom: 122px;
    padding: 44px 48px;
    border-radius: 4px;
    background: ${(props) => props.theme.grey10};
  }

  form {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 412px;

    border-radius: 64px 64px 0px 0px;
  }

  .content-p {
    margin-bottom: 1rem;
  }

  .title-register {
    display: flex;

    /* margin-bottom: 32px; */
  }

  .content-of-two {
    flex-direction: row;
    gap: 9px;
  }
  .advertiser-button {
    background-color: ${(props) =>
      props.advertiserOrBuyer ? props.theme.grey1 : ''};
    color: ${(props) => (props.advertiserOrBuyer ? 'white' : 'black')};
  }

  .content-buttons {
    flex-direction: row;
    gap: 9px;
    margin-bottom: 1rem;

    @media (max-width: 374px) {
      flex-direction: column;
    }
  }
`
