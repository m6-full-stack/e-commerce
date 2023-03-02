import styled from 'styled-components'

export const HeaderProductsStyle = styled.header`
  width: 100%;
  margin-top: 65px;
  background-color: ${(props) => props.theme.grey8};
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-left: 6%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
  }
`
