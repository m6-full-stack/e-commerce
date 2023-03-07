import styled from 'styled-components'

export const MenuContainer = styled.ul`
  
  ul {
    list-style: none;
    height: 80px;
    background: #fdfdfd;
    border-bottom: 1px solid #dee2e6;
  }

  ul li {
    width: 100%;
    max-width: 200px;
    display: inline-block;
    position: relative;
  }

  ul li .content-username {
    display: flex;
    flex-direction: row;
    height: 80px;

    align-items: center;
  }

  ul li .content-username .border-name {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5126ea;
    width: 32px;
    height: 32px;
    border-radius: 150px;
  }

  ul li .content-username .border-name span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 0px;
    color: #fff;
  }

  ul li a {
    display: block;
    padding: 20px 25px;

    text-decoration: none;
    text-align: center;
    font-size: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;


    color: #495057;
  }

  ul li ul.dropdown li {
    display: block;
  }

  ul li ul.dropdown {
    display: none;

    width: 100%;
    height: auto;

    position: absolute;
    top: 70px;

    z-index: 999;

    background: #f8f9fa;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    border-radius: 4px;
  }

  ul li a:hover {
    font-weight: 700;
  }

  ul li:hover ul.dropdown {
    display: block;
  }
`
