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
  .list-auction h1 {
    user-select: none;
    color: black;
    padding-left: 20px;
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
    height: 520px;
    display: flex;
    overflow-x: scroll;
    padding: 20px;
    margin-left: -60px;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    scroll-snap-align: start;
  }
  .content-carrossel::-webkit-scrollbar {
    width: 0px;
  }
  .carrossel {
    height: 400px;
    display: -webkit-box;
    overflow-x: scroll;
    padding: 20px;
    flex-direction: row;
    gap: 40px;

    scroll-snap-align: start;
  }
  .carrossel::-webkit-scrollbar {
    width: 0px;
  }
/* 
  .carrossel::-webkit-scrollbar-track {
    background: #ffffff;
  }

  .carrossel::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.grey2};
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  .carrossel::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.grey2};
    border-radius: 10px;
    border: 3px solid #ffffff;
  } */

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
