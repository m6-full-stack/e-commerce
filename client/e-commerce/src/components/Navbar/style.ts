import styled from 'styled-components'

export const NavbarContainer = styled.div`
  width: 100%;
  background: red;
  z-index: 10;

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 60px;
    position: fixed;

    height: 80px;
    width: 100%;

    background: #fdfdfd;
    border-bottom: 2px solid #dee2e6;
    color: white;
  }

  .nav-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    width: 100%;
    height: 80px;
    gap: 44px;
  }

  .home,
  .skills,
  .contact,
  .about,
  .signup {
    text-decoration: none;
    font-size: 1rem;
    color: #495057;
    font-weight: 600;
    line-height: 28px;
    font-family: Inter;
    cursor: pointer;
  }

  hr {
    border: none;
    width: 2px;
    height: 80px;
    background: #dee2e6;
  }

  .signup {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;

    width: 100%;
    max-width: 133px;
    height: 48px;

    border: 1.5px solid #adb5bd;
    border-radius: 4px;

    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
    color: #0b0d0d;
  }

  .signup:hover {
    background: #212529;
    color: #fdfdfd;
  }

  .mobile-menu-icon {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .logo {
      display: flex;
      position: absolute;
      top: 25px;
      left: 16px;
    }

    .nav-links {
      display: none;
    }

    .nav-links-mobile {
      position: absolute;
      left: 0;
      top: 80px;

      display: block;
      width: 100%;

      list-style: none;
      background-color: #fdfdfd;
      filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.09));

      transition: all 0.5s ease-in-out;
    }

    .home,
    .skills,
    .contact,
    .about,
    .signup {
      padding: 44px;

      width: 100%;
      transition: all 0.5s ease-in-out;
    }

    li {
      padding-left: 16px;
    }

    hr {
      width: 100%;
      height: 2px;
      background: #dee2e6;
    }

    .signup {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 28px;
      gap: 10px;

      width: 100%;
      max-width: 333px;
      height: 48px;

      border: 1.5px solid #adb5bd;
      border-radius: 4px;

      margin-bottom: 32px;
      margin-left: 16px;

      font-weight: 600;
      font-size: 16px;
      line-height: 0px;
      color: #0b0d0d;

      @media (max-width: 365px) {
        margin-left: 0;
      }
    }

    .mobile-menu-icon {
      position: absolute;
      top: 25px;
      right: 16px;

      display: block;

      font-weight: 900;
      font-size: 18px;
      color: #2c2c2c;
      line-height: 18px;

      border: none;
      outline: none;
    }
  }
`
