import styled from 'styled-components'

export const ContainerHome = styled.main`
  width: 100vw;
  color: ${(props) => props.theme.grey10};
  margin-top: 30px;

  .select-announcement {
    text-align: center;
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: 100vh;
    background-color: ${(props) => props.theme.brand1};
  }
  .select-announcement h1 {
    font-size: 28px;
  }
  .select-announcement h3 {
    font-weight: 400;
    font-size: 14px;
  }
  .select-buttons {
    display: flex;
    gap: 40px;
    justify-content: center;
    flex-direction: column;
    color: ${(props) => props.theme.grey10};
    align-items: center;
  }
  .select-buttons .button-car {
    width: 300px;
    padding: 10px 0px;
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme.grey10};
    font-size: 14px;
    color: ${(props) => props.theme.grey10};
  }
  .select-buttons .button-car:hover {
    background-color: ${(props) => props.theme.grey10};
    color: ${(props) => props.theme.black};
  }
  .select-buttons .button-motorcycle {
    width: 300px;
    padding: 10px 0px;
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme.grey10};
    font-size: 14px;
    color: ${(props) => props.theme.grey10};
  }
  .select-buttons .button-motorcycle:hover {
    background-color: ${(props) => props.theme.grey10};
    color: ${(props) => props.theme.black};
  }
  .announcements {
    padding: 80px 0px;
    display: flex;
    gap: 80px;
  }

  .list-auction {
    padding-left: 20px;
    padding-right: 20px;
  }
  .list-auction h1 {
    user-select: none;
    color: black;
  }
  .list-car h1 {
    user-select: none;
    color: black;
    padding-left: 20px;
  }
  .list-motorcycle h1 {
    user-select: none;
    color: black;
    padding-left: 20px;
  }
  .content-carrossel {
    display: flex;
    overflow-x: scroll;

    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    scroll-snap-align: start;

    @media (max-width: 370px) {
      flex-direction: column;
    }
  }
  .carrossel {
    display: -webkit-box;
    overflow-x: scroll;
    padding: 20px;
    flex-direction: row;
    gap: 40px;

    scroll-snap-align: start;
  }
  .content-carrossel::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .content-carrossel::-webkit-scrollbar-thumb {
    width: 80px;
    background: ${(props) => props.theme.grey5};
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  .content-carrossel::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.grey4};
  }
  .content-carrossel::-webkit-scrollbar-thumb:active {
    background: ${(props) => props.theme.grey4};
  }
  .content-carrossel ::-webkit-scrollbar-track {
    border: 0px none #ffffff;
    border-radius: 7px;
  }

  .carrossel::-webkit-scrollbar-track:active {
    background: #525252;
  }
  .content-carrossel::-webkit-scrollbar-corner {
    background: transparent;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 450px) {
    .select-announcement h1 {
      width: 380px;
    }
    .select-announcement h3 {
      width: 380px;
    }
  }
  @media (min-width: 1024px) {
    margin-top: 80px;
    .select-announcement {
      height: 60vh;
      .select-buttons {
        display: flex;
        flex-direction: row;
        width: 90%;
      }
    }
  }
`
