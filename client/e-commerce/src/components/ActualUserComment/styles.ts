import styled from 'styled-components'

export const UserCommentInput = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
  background-color: #fdfdfd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  .divCommentContainer {
    margin-bottom: 15px;
  }

  .divTopComments {
    margin-top: 25px;
    margin-left: -2px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .userCommentsImage {
    width: 32px;
    height: 32px;
    background-color: #e34d8c;
    color: #fdfdfd;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .userCommentsName {
    font-size: 14px;
    margin-left: 15px;
    margin-right: 15px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .errors {
    width: 100%;
    font-weight: 100;
    font-family: Inter;
    font-size: 13px;
    color: ${(props) => props.theme.alert1};
    margin-top: -20px;
    margin-bottom: 20px;
    margin-left: -200px;
  }
`

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
