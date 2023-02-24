import styled from 'styled-components'

export const SectionProductsStyle = styled.section`
  width: 50%;
  display: flex;
  align-items: center;
  margin-top: -585px;

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
`
