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
    margin-top: -100px;
    margin-bottom: 40px;
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

  .content-auctionCard {
    width: 100%;
    max-width: 1600px;
    height: 500px;
    flex-direction: row;
    gap: 16px;
    overflow-x: auto;
  }

  .content-auctionCard::-webkit-scrollbar {
    width: 0;
  }
`
