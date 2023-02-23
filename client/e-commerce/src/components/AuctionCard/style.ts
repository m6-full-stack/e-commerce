import styled from 'styled-components'

export const AuctionCardContainer = styled.div`
  width: 100%;
  margin-top: 31px;

  .content-auction {
    width: 100%;
    max-width: 668px;
    height: 456px;
    background: yellow;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  footer {
    display: flex;
    gap: 16px;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 62px;
    background-color: ${(props) => props.theme.brand1};
  }
`
