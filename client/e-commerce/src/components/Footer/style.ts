import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 100%;

  background: ${(props) => props.theme.grey0};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 45px 59px;

  div {
    justify-content: center;
    align-items: center;
    gap: 60px;

    @media (min-width: 1024px) {
      justify-content: space-between;

      flex-direction: row;
    }

    @media (max-width: 380px) {
      gap: 24px;
    }
  }

  .border {
    width: 53px;
    height: 50px;

    background: ${(props) => props.theme.grey1};

    border-radius: 4px;

    align-items: center;
    justify-content: center;
  }
`
