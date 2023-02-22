import styled from 'styled-components'

export const HeaderProductsStyle = styled.header`
  width: 100%;
  background-color: gray;
  max-height: 100vh;
  display: flex;
  justify-content: center;

  section {
    width: 50%;
    margin-top: 35px;
    display: flex;
    align-items: center;
  }

  .productInformation {
    background-color: #fdfdfd;
    padding: 35px;
    border-radius: 4px;
  }

  .sectionDivHeaderMain {
    width: 95%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
  }

  .divYear {
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: blue;
  }

  .divPrice {
    width: 20%;
    font-weight: 700;
  }

  .buy {
    padding: 12px 20px;
    background-color: #4529e6;
    color: #fdfdfd;
    border-radius: 4px;
  }

  aside {
    width: 30%;
    margin-left: 30px;
  }

  figure {
    width: 100%;
    padding: 35px;
    background-color: #fdfdfd;
    display: flex;
    justify-content: center;
    border-radius: 4px;
  }

  .titleImages {
    width: 80%;
    text-align: left;
    margin-top: 20px;
    margin-bottom: -20px;
  }

  .imagesContainer {
    width: 440px;
    height: 340px;
    margin-top: 35px;
    background-color: #fdfdfd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imagesDivs {
    width: 90%;
    height: 70%;
    margin-top: 35px;
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
  }

  .descriptionProduct {
    background-color: #fdfdfd;
    padding: 35px;
    border-radius: 4px;
  }
`
