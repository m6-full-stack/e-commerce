import React from 'react'

import { NavbarContainer } from './style'

import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/Logo-header.svg'
import { Paragraph } from '../../styles/typography'
import Button from '../Button'

import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

interface Props {
  clicked: boolean
  isClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navbar = ({ clicked, isClicked }: Props) => {
  const handleClick = () => {
    isClicked(!clicked)
  }
  return (
    <NavbarContainer>
      <nav className="Nav">
        <div className="content-logo">
          <Link to="/">
            <img className="NavLogo" src={Logo} alt="" />
          </Link>
        </div>

        <div className="content-links-buttons">
          <div className="content-links">
            <ul className="NavbarWrapper">
              <li className="NavElements">
                <NavLink to="/">
                  <Paragraph
                    fontWeight={600}
                    lineHeight={'28px'}
                    color={'grey2'}
                  >
                    Carros
                  </Paragraph>
                </NavLink>
              </li>
              <li className="NavElements">
                <NavLink to="/">
                  <Paragraph
                    fontWeight={600}
                    lineHeight={'28px'}
                    color={'grey2'}
                  >
                    Motos
                  </Paragraph>
                </NavLink>
              </li>
              <li className="NavElements">
                <NavLink to="/">
                  <Paragraph
                    fontWeight={600}
                    lineHeight={'28px'}
                    color={'grey2'}
                  >
                    Leilão
                  </Paragraph>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="content-user">
            <Paragraph fontWeight={600} lineHeight={'28px'} color={'grey2'}>
              Fazer Login
            </Paragraph>
            <Button variant="transparent" buttonSize="g4h">
              Cadastrar
            </Button>
          </div>
        </div>
        <div className="content-burger">
          {!clicked ? (
            <GiHamburgerMenu className="Icon" onClick={handleClick} />
          ) : (
            <ImCross className="Icon" onClick={handleClick} />
          )}
        </div>
      </nav>
    </NavbarContainer>
  )
}
