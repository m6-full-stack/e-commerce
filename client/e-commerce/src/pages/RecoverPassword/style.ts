import styled from 'styled-components'

export const RecoverContainer = styled.div`
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
    height: 193px;
    width: 100%;
    max-width: 412px;
    background: var(--color_white);
    border-radius: 64px 64px 0px 0px;
  }
  span {
    color: ${(props) => props.theme.alert1};
  }
  .color-button {
    color: ${(props) => props.theme.grey0};
  }

  .button-hover:hover {
    background: ${(props) => props.theme.grey1};

    border-radius: 4px;
    .color-button {
      color: ${(props) => props.theme.grey10};
    }
  }
`
