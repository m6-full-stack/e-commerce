import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  max-width: 312px;
  gap: 16px;
  & > div {
    gap: 16px;
  }
  .content-img {
    padding: 0 25px;
    background: ${(props) => props.theme.grey7};
  }
  .content-img img {
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
