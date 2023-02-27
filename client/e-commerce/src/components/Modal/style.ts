import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0 0.25);
  padding: 16px;

  .content {
    margin-top: 80px;
    max-width: 520px;
    height: 1036px;
    padding: 16px;
    background: ${(props) => props.theme.whiteFixed};
    border-radius: 8px;
    gap: 24px;
    overflow: auto;
  }


  .content-title {
    justify-content: space-between;
    flex-direction: row;
  }

  form {
    width: 100%;
  }

  .content-buttons {
    gap: 10px;
    flex-direction: column;
  }

  .content-input {
    flex-direction: row;
    gap: 8px;
  }

  .content-buttons-car-motor{
    flex-direction: row;
    gap: 8px;
  }

`
