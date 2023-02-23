import styled from 'styled-components'

export const HeaderProductsStyle = styled.header`
  width: 100%;
  height: 140rem;
  margin-top: 65px;
  background-color: gray;
  display: flex;
  justify-content: center;

  section {
    width: 50%;
    margin-top: 35px;
    display: flex;
    align-items: center;
  }

  figure {
    width: 100%;
    height: 355px;
    padding: 35px;
    background-color: #fdfdfd;
    display: flex;
    justify-content: center;
    border-radius: 4px;
  }

  .principalImage {
    width: 441px;
    height: 293px;
  }

  img:hover {
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    cursor: pointer;
  }

  .description {
    color: #495057;
    font-family: Inter;
  }

  .spanPriceYear {
    background-color: #edeafd;
    padding: 4px 8px;
    border-radius: 5px;
  }

  Button:hover {
    background-color: #ffffff;
    color: #4529e6;
  }

  .productInformation {
    background-color: #fdfdfd;
    padding: 35px;
    border-radius: 4px;
  }

  .divYearPrice {
    width: 95%;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
  }

  .divYear {
    width: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: blue;
    font-size: 14px;
  }

  .divPrice {
    width: 120px;
    font-weight: 400;
    font-size: 16px;
  }

  .productTitle {
    font-size: 22px;
  }

  .descriptionProduct {
    padding: 20px 0px;
    font-size: small;
    text-align: justify;
  }

  .divDescriptionProduct {
    background-color: #fdfdfd;
    padding: 35px;
    border-radius: 4px;
    font-family: Inter;
  }

  .titleDescription {
    font-size: 20px;
  }

  .divCommentsProduct {
    margin-top: 25px;
    background-color: #fdfdfd;
    padding: 35px;
    border-radius: 4px;
  }

  .titleComments {
    margin-top: 10px;
    margin-bottom: -20px;
    font-size: 20px;
  }

  .divCommentsProduct {
    margin-top: 25px;
    background-color: #fdfdfd;
    padding: 35px;
    border-radius: 4px;
  }

  aside {
    width: 30%;
    margin-left: 30px;
  }

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
