import styled from 'styled-components'

export const NavbarContainer = styled.header`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 80px;

  background: ${(props) => props.theme.grey10};
  border-bottom: 2px solid ${(props) => props.theme.grey6};

  .Nav {
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 0 60px;

    @media (max-width: 1024px) {
      padding: 0 16px;
    }
  }

  .content-logo {
    justify-content: center;
  }

  .NavLogo {
  }

  .content-links-buttons {
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 592px;
    min-width: 592px;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .content-links {
    width: 100%;
    height: 80px;

    flex-direction: row;
    align-items: center;

    margin-right: 44px;
  }

  .NavbarWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .content-user {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 80px;
    min-width: 311px;

    padding: 0 0 0 44px;

    border-left: 2px solid ${(props) => props.theme.grey6};
  }

  .content-burger {
    align-items: end;
    justify-content: center;
    width: 20px;
    display: none;

    @media (max-width: 1024px) {
      display: flex;
    }
  }

  .Icon {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    color: #2c2c2c;
  }
`
