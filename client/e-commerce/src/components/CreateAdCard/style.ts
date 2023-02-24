import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  padding: 0 1rem;

  .content {
    width: 100%;
    max-width: 1240px;
    height: 461px;
    background: ${(props) => props.theme.grey10};

    border-radius: 4px;
    padding: 40px 22px 0 29px;

    @media (min-width: 394px) {
      height: 406px;
    }
  }

  .content-title {
    gap: 1.5rem;
    margin-bottom: 16px;

    @media (min-width: 394px) {
      margin-bottom: 39px;
    }

    @media (min-width: 1258px) {
      max-width: 1159px;
    }
  }

  .border {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    background: ${(props) => props.theme.brand1};
  }

  .content-name {
    flex-direction: row;
    gap: 10px;
  }

  .content-advertiser {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 32px;

    width: 100%;
    max-width: 92px;

    background: #edeafd;
    border-radius: 4px;
  }
`
