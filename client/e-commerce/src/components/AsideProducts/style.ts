import styled from 'styled-components'

export const AsideProductsStyle = styled.aside`
  width: 30%;
  margin-left: 30px;
  margin-top: -550px;

  .titleImages {
    width: 80%;
    text-align: left;
    margin-top: 20px;
    margin-bottom: -20px;
    font-size: 20px;
  }

  .imagesContainer {
    width: 440px;
    height: 320px;
    margin-top: 35px;
    background-color: #fdfdfd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 25px;
  }

  .imagesDivs {
    width: 90%;
    height: 90%;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
  }

  .otherImages {
    max-width: 108px;
    max-height: 108px;
    padding: 27px 7px;
    background-color: #e9ecef;
    margin-top: 15px;
    border-radius: 6px;
  }

  img:hover {
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    cursor: pointer;
  }

  .userContainer {
    width: 440px;
    height: 380px;
    margin-top: 35px;
    background-color: #fdfdfd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 35px 45px;
  }

  .userImage {
    width: 100px;
    height: 100px;
    background-color: #4529e6;
    color: #fdfdfd;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .userName {
    font-size: 20px;
  }

  .descriptionUser {
    padding: 20px 0px;
    font-size: small;
    text-align: center;
  }

  .buttonSeeAll {
    background-color: #0b0d0d;
    color: #fdfdfd;
    padding: 12px 28px;
    border-radius: 4px;
    font-size: 16px;
  }
`
