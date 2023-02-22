import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.grey8};

  & > div {
    display: flex;
    width: 100%;
    max-width: 412px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 204px;
    margin-bottom: 122px;
    padding: 44px 48px;
    gap: 32px;
    border-radius: 4px;
    background: ${(props) => props.theme.grey10};
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 483px;
    width: 100%;
    max-width: 412px;
    background: var(--color_white);
    border-radius: 64px 64px 0px 0px;
  }
  

  .title-login {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .teste {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: end;
    gap: 21px;
    margin-bottom: 21px;
  }

  .teste1 {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 21px;
  }
`
