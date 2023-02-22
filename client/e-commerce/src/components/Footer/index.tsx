import React from 'react'
import { Paragraph } from '../../styles/typography'

import logo from '../../assets/Logo-footer.svg'
import { FooterContainer } from './style'

import { FaAngleUp } from 'react-icons/fa'

export const Footer = () => {
  return (
    <FooterContainer>
      {/* <div>
        <img src={logo} alt="logo marca motors shop" />
        <Paragraph
          fontWeight={400}
          size={'small'}
          lineHeight={'24px'}
          color={'whiteFixed'}
        >
          © 2022 - Todos os direitos reservados.
        </Paragraph>

        <div className="border">
          <FaAngleUp color="white" />
        </div>
      </div> */}
    </FooterContainer>
  )
}
