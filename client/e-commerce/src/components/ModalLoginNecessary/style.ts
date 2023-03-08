import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);

  padding: 90px 16px;
  z-index: 999;

  .content {
    max-width: 520px;

    width: 100%;
    padding: 16px 16px 32px 16px;
    background: ${(props) => props.theme.whiteFixed};

    border-radius: 8px;
    gap: 55px;
    overflow: auto;
  }

  .content-title {
    justify-content: space-between;
    flex-direction: row;
  }

  p {
    text-align: center;
    font-size: 16px;
  }

  button {
    height: 48px;
    max-width: 315px;
    padding: 12px 28px;
    color: ${(props) => props.theme.whiteFixed};
    border: 1.5px solid ${(props) => props.theme.brand1};
    border-radius: 4px;
    background-color: ${(props) => props.theme.brand1};
    font-size: medium;
  }

  .content-buttons-create {
    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

  }

  .content::-webkit-scrollbar {
    width: 0;
  }
`
