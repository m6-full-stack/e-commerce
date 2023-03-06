import styled from 'styled-components'

export const InputText = styled.textarea`
  width: 100%;
  row-gap: initial;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: initial;
  line-height: 20px;
  display: flex;
  margin-top: 15px;
  margin-bottom: 25px;
  height: 7rem;
  min-height: 3rem;
  border: 1.5px solid #e9ecef;
  border-radius: 4px;
  color: #868e96;
  padding: 10px;
  resize: none;

  min-height: 100px;
`

export const UserCommentInputFinal = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  /* post */
  .content-post {
    width: 100%;
    background: ${(props) => props.theme.grey10};
    border-radius: 4px;

    /* margin-top: 28px; */
  }

  .content-form {
    display: flex;
    flex-direction: column;
    padding: 36px 26px;
  }

  .container-buttons {
    gap: 24px;
    margin-top: 24px;

    @media (min-width: 1024px) {
      flex-direction: row;
      max-width: 440px;
      gap: 8px;
    }
  }
  .content-buttons {
    flex-direction: row;
    gap: 8px;
    max-width: 190px;
  }

  .content-button-1 {
    max-width: 120px;
  }

  .content-button-2 {
    max-width: 66px;
  }

  .content-text-area {
    @media (min-width: 1024px) {
      background: red;
    }
  }

  .button-rel {
    @media (min-width: 1024px) {
      position: absolute;
      /* left: 200px; */
    }
  }
`

export const InputText2 = styled.textarea`
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: initial;
  line-height: 20px;
  display: flex;
  height: 4rem;
  min-height: 3rem;
  border: 1.5px solid #e9ecef;
  border-radius: 4px;
  color: #868e96;
  padding: 10px;
  resize: none;
`
