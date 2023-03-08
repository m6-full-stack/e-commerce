import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 312px;
  max-width: 312px;
  min-width: 312px;

  cursor: pointer;

  section {
    gap: 16px;
    max-height: 347px;
  }

  section:hover {
    .content-img {
      border: 2px solid ${(props) => props.theme.brand1};
      border-radius: 4px;
      overflow: hidden;

      & img {
        scale: 1.2;
        
      }


    }
  }

  
  .content-img {
    background: ${(props) => props.theme.grey7};
    position: relative;
    height: 150px;
    overflow: hidden;
  }

  img:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
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
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
  }

  .content-description {
    width: 100%;
    gap: 16px;
  }

  .content-desc {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
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
  .border-mileage {
    width: 95px;
  }
  .content-price {
    align-items: flex-end;
  }
`
