import styled from 'styled-components'

export const SectionProductsFinalStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
  overflow: hidden;

  //INICIO CAR IMG
  .content-card-car {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    max-width: 752px;

    max-height: 355px;
    min-height: 355px;

    padding: 24px;

    background: ${(props) => props.theme.grey10};
    border-radius: 4px;
    overflow: hidden;
  }

  .content-card-car img {
    width: 100%;
    
    object-fit: cover;
    
    @media (min-width: 820px) {
        scale: 0.75;
      }
  }
  //FIM CAR IMG

  //INICIO INFO CAR (content)
  .content-year-and-price {
    flex-direction: column;
    align-items: flex-start;

    padding: 44px 20px 28px 28px;


    gap: 24px;

    background: ${(props) => props.theme.grey10};

    border-radius: 4px;
    @media (min-width: 1024px) {
      padding: 28px 44px 28px 44px;
    }
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
    align-items: flex-start;
  }
  /* FIM INFO CAR */

  /* INICIO DESCRIPTION */
  .content-description {
    background: ${(props) => props.theme.grey10};
    align-items: flex-start;
    border-radius: 4px;
    width: 100%;
    height: 325px;
    padding: 36px 28px 32px 28px;
    gap: 32px;

    @media (min-width: 1024px) {
      max-height: 212px;
      padding: 36px 44px 36px 44px;
    }
  }
  /* FIM DESCRIPTION */
`
