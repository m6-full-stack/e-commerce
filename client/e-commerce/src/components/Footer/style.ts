import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 100%;

  padding: 45px 59px;
  margin-top: 77px;

  background: ${(props) => props.theme.grey0};

  div {
    justify-content: center;
    align-items: center;
    gap: 60px;
    @media (min-width: 1024px) {
      justify-content: space-between;

      flex-direction: row;

      margin-bottom: 0;
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
