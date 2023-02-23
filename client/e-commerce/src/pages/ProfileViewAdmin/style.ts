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
  }
`
