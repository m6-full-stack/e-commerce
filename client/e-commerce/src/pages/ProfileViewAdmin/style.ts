import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;

  .blue {
    height: 411px;
    width: 100%;
    background: ${(props) => props.theme.brand1};
  }

  .content {
    margin: 0 auto;
    height: auto;
    margin-top: -100px;
    margin-bottom: 40px;
    padding-bottom: 40px;
  }

  .title {
    display: none;
  }
  .no-ads {
    color: ${(props) => props.theme.grey2};
    align-items: center;
    margin-bottom: 40px;
  }

  .title {
    @media (min-width: 1024px) {
      margin-left: 60px;
      display: flex;
    }
  }
  .content-carousel::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  .content-carousel::-webkit-scrollbar-thumb {
    width: 80px;
    background: ${(props) => props.theme.grey5};
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  .content-carousel::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.grey4};
  }
  .content-carousel::-webkit-scrollbar-thumb:active {
    background: ${(props) => props.theme.grey4};
  }
  .content-carousel ::-webkit-scrollbar-track {
    border: 0px none #ffffff;
    border-radius: 7px;
  }

  .content-carousel::-webkit-scrollbar-corner {
    background: transparent;
  }

  .content-carousel {
    width: 100%;
    min-width: 100%;
    max-height: 500px;
    flex-direction: row;
    margin-left: 16px;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 20px;
    margin-bottom: 30px;

    @media (max-width: 360px) {
      flex-direction: column;
    }
  }

  .title-car-motorbike {
    margin-left: 1rem;
    margin-bottom: 40px;
  }

  .content-carousel::-webkit-scrollbar {
    width: 0;
  }
`
