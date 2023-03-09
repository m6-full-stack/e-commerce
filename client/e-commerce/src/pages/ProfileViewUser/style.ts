import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;

  .blue {
    height: 411px;
    width: 100%;
    background: ${(props) => props.theme.brand1};
  }

  .no-ads {
    color: ${(props) => props.theme.grey2};
    align-items: center;
    margin-bottom: 40px;
  }

  .content {
    margin: 0 auto;
    height: auto;
    margin-top: -100px;
    margin-bottom: 40px;
    padding-bottom: 40px;
  }

  .carousel::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  .carousel::-webkit-scrollbar-thumb {
    width: 80px;
    background: ${(props) => props.theme.grey5};
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  .carousel::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.grey4};
  }
  .carousel::-webkit-scrollbar-thumb:active {
    background: ${(props) => props.theme.grey4};
  }
  .carousel ::-webkit-scrollbar-track {
    border: 0px none #ffffff;
    border-radius: 7px;
  }

  .carousel::-webkit-scrollbar-corner {
    background: transparent;
  }

  .carousel {
    width: 100%;
    min-width: 100%;
    flex-direction: row;
    margin-left: 16px;
    gap: 16px;
    padding-bottom: 20px;
    margin-right: 16px;
    overflow-x: auto;

    @media (max-width: 360px) {
      flex-direction: column;
    }
  }

  .title {
    margin-left: 1rem;
    margin-bottom: 40px;
  }

  .carousel::-webkit-scrollbar {
    width: 0;
  }
`
