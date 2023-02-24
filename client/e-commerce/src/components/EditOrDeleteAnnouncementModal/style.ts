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
    width: 460px;
    height: 100%;
    background-color: #ffffff;
    border-radius: 8px;
    display: flex;
    justify-content: space-evenly;
  }

  .titleClose {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    margin-bottom: -20px;
  }

  .titlesCloseText {
    font-size: 14px;
    font-weight: 600;
  }

  .closeModal {
    font-size: 22px;
    color: ${(props) => props.theme.grey4};
    cursor: pointer;
  }

  .titles {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
    font-family: Inter;
    font-style: normal;
  }

  .buttonsAnnouncementType {
    width: 100%;
    padding: 10px 0px 10px 0px;
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
    padding: 16px 24px;
  }

  .inputGroup {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  #buttonAddImage {
    margin-bottom: 10px;
    height: 38px;
    border: 1.5px solid #edeafd;
    padding: 8px 20px;
    background: #edeafd;
    color: #4529e6;
  }

  .buttonsAnnouncementCancelOrAccept {
    padding: 18px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin-bottom: -5px;
  }
`

export const ButtonBlue = styled.button`
  width: 48%;
  display: flex;
  justify-content: center;
  border: 1.5px solid #b0a6f0;
  background-color: #4529e6;
  color: #ffffff;
  padding: 12px 28px;
  border-radius: 4px;
  font-size: 16px;
  font-family: Inter;
  margin-bottom: 15px;
  margin-top: -8px;

  :hover {
    font-weight: 600;
    transform: scale(1.04);
  }
`

export const ButtonTransp = styled.button`
  width: 48%;
  display: flex;
  justify-content: center;
  border: 1.5px solid #b0a6f0;
  background-color: transparent;
  padding: 12px 28px;
  border-radius: 4px;
  font-size: 16px;
  font-family: Inter;
  margin-bottom: 15px;
  margin-top: -8px;

  :hover {
    font-weight: 600;
    transform: scale(1.04);
  }
`
