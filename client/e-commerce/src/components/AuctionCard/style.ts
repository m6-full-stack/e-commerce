import styled from 'styled-components'
import car from '../../assets/car.svg'

export const AuctionCardContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  & > div {
    @media (min-width: 1024px) {
      margin-left: 60px;
    }
  }

  .content-auction {
    width: 100%;
    min-width: 375px;
    max-width: 725px;

    justify-content: space-between;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%),
      url(${car});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 4px 4px 0px 0px;

    margin-top: 40px;
    margin-bottom: 32px;
  }

  .content-auction-title {
    padding: 33px 31px 33px 22px;
    gap: 24px;
  }
  .container-clocker {
    flex-direction: row;
    width: 123px;
    height: 36px;
    background: #ffffff;
    border-radius: 32px;
    padding-left: 8px;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
    margin-bottom: 11px;
  }

  .container-clocker .Icons {
    color: #4529e6;
    height: 20px;
    width: 20px;
  }

  .container-clocker .Icons span {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: #212529;
  }

  .container-year {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .container-year span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;
    background: #edeafd;
    border-radius: 4px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${(props) => props.theme.brand1};
  }

  .content-price {
    gap: 24px;
  }

  footer {
    display: flex;
    gap: 16px;
    flex-direction: row;
    align-items: center;
    padding-left: 1.5rem;

    width: 100%;
    height: 62px;
    background-color: ${(props) => props.theme.brand1};
    @media (max-width: 315px) {
      padding-left: 8px;
    }
  }
`
