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

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }

  .content-buttons {
    gap: 10px;

    flex-direction: row;
  }

  .content-input {
    flex-direction: row;
    gap: 8px;
  }

  .content-img {
    align-items: center;
    background: ${(props) => props.theme.grey7};
  }

  .content-img img {
    scale: 0.6;
  }

  .content::-webkit-scrollbar {
    width: 0;
  }
`
