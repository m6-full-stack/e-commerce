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

  .content-buttons-car-motor {
    flex-direction: row;
    gap: 8px;
  }

  .content-buttons-create {
    flex-direction: row;
    margin-top: 31px;
    gap: 8px;

    @media (min-width: 1028px) {
      justify-content: flex-end;
    }
  }

  .content::-webkit-scrollbar {
    width: 0;
  }
`
