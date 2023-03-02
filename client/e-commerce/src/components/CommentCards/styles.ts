import styled from 'styled-components'

export const UserCommentCard = styled.div`
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

  .userCommentsImage1 {
    width: 32px;
    height: 32px;
    background-color: #7000ff;
    color: #fdfdfd;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .userCommentsImage2 {
    width: 32px;
    height: 32px;
    background-color: #153d2e;
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

  .dateComments {
    list-style: disc;
  }

  .descriptionCommentsUser {
    margin-top: 10px;
    font-size: small;
    text-align: center;
  }

  .description {
    color: #495057;
    font-family: Inter;
    text-align: justify;
  }

  @media (max-width: 1024px) {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
  }
`
