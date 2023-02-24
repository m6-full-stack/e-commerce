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

  .title {
    @media (min-width: 1024px) {
      margin-left: 60px;
      display: flex;
    }
  }

  .content-carousel {
    width: 100%;
    max-width: 1600px;
    min-width: 100%;
    height: 500px;
    flex-direction: row;
    gap: 16px;
    margin-right: 16px;
    overflow-x: auto;

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
