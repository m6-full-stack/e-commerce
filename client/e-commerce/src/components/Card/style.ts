import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 312px;
  max-width: 312px;
  min-width: 312px;

  section {
    gap: 16px;
    max-height: 347px;
  }

  section:hover {
    .content-img {
      border: 2px solid ${(props) => props.theme.brand1};
      border-radius: 4px;

      & img {
        scale: 1.2;
      }
    }
  }

  .content-img {
    padding: 0 25px;
    background: ${(props) => props.theme.grey7};
    position: relative;
  }

  .content-img span {
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    font-family: 'Inter';

    background-color: #4529e6;
    padding: 1px 8px;

    position: absolute;
    left: 8px;
    top: 8px;
  }

  .content-img img {
    transition: all 0.25s linear;
  }

  .content-description {
    width: 100%;
    gap: 16px;
  }

  .content-name {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
  .content-border {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.brand1};
    width: 100%;
    max-width: 32px;
    height: 32px;
    border-radius: 150px;
  }
  .content-year-and-price {
    flex-direction: row;
    align-items: center;
  }
  .content-year {
    flex-direction: row;
    gap: 12px;
  }
  .border {
    justify-content: center;
    align-items: center;
    width: 51px;
    height: 32px;
    padding: 4px 8px;
    gap: 10px;
    background: ${(props) => props.theme.brand4};
    border-radius: 4px;
  }
  .content-price {
    align-items: flex-end;
  }
`
