import styled from 'styled-components'

export const AvatarContainer = styled.div`
  .content-avatar {
    flex-direction: row;
    gap: 13px;
    align-items: center;
    margin-top: 12px;
  }

  .border-initials {
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;

    border: 1px solid ${(props) => props.theme.brand1};
    border-radius: 150px;

    background: ${(props) => props.theme.random4};
  }

  .border-initials span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 0px;
    color: ${(props) => props.theme.whiteFixed};
  }

`
