import styled from 'styled-components'

export const Section = styled.section`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  .divCreateAnnouncement {
    width: 520px;
    height: 900px;
    background-color: #ffffff;
    margin-top: 15px;
    border-radius: 8px;
  }

  .titleClose {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
  }

  .titlesCloseText {
    font-size: 16px;
    font-weight: 600;
  }

  .closeModal {
    font-size: 22px;
    color: ${(props) => props.theme.grey4};
    cursor: pointer;
  }

  .titles {
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 500;
    font-family: Inter;
    font-style: normal;
  }

  .buttonsAnnouncementType {
    padding: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .inputSpacement {
    width: 30% important;
    padding: 16px 24px;
    margin-left: 35px;
    width: 100%;
  }

  form {
    width: 100%;
    margin-top: 15px;
    padding: 16px 24px;
  }

  .inputGroup {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  #buttonAddImage {
    margin-top: -25px;
    height: 38px;
    border: 1.5px solid #edeafd;
    padding: 8px 20px;
    background: #edeafd;
    color: #4529e6;
  }

  .buttonsAnnouncementCancelOrAccept {
    padding: 24px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`
