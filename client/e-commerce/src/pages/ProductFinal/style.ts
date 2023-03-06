import styled from 'styled-components'

export const ProductContainerFinal = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  background: linear-gradient(
    180deg,
    #4529e6 15.625%,
    #f1f3f5 15.626%,
    #f1f3f5 100%
  );

  & > div {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    display: flex;
    flex-direction: column;
    /* gap: 16px; */

    margin-bottom: 43px;

    padding-top: 125px;
    gap: 16px;

    @media (min-width: 1024px) {
      flex-direction: row;
      gap: 35px;
    }
  }

  .testt {
    width: 100%;
    gap: 16px;
  }
  .content-section {
    width: 100%;
    max-width: 751px;
    
  }

  .content-aside {
    width: 100%;
    max-width: 752px;
    
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .content-comment {
    width: 100%;
    max-width: 751px;
    
  }

  .content-actual {
    width: 100%;
    max-width: 751px;
    
  }

  .off {
    display: none;
    width: 100%;
    max-width: 444px;
    
    @media (min-width: 1024px) {
      display: flex;
    }
  }

  @media (min-width:1024px) {
    background: linear-gradient(
    180deg,
    #4529e6 31.625%,
    #f1f3f5 31.626%,
    #f1f3f5 100%
  );
  }
  
`
