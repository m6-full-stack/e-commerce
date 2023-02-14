import styled, { css } from 'styled-components'
import BaseParagraph from '../components/BaseParagraph'
import BaseTitle from '../components/BaseTitle'

export const ThemeTitle = styled(BaseTitle)`
  font-family: 'Lexend', sans-serif;
  color: ${(props) => props.color};
  ${(props) => {
    switch (props.titleSize) {
      case 'title1-700':
        return css`
          font-weight: 700;
          font-size: 44px;
          line-height: 56px;
        `

      case 'title2-600':
        return css`
          font-weight: 600;
          font-size: 36px;
          line-height: 45px;
        `

      case 'title3-600':
        return css`
          font-weight: 600;
          font-size: 32px;
          line-height: 40px;
        `

      case 'title3-500':
        return css`
          font-weight: 500;
          font-size: 32px;
          line-height: 40px;
        `

      case 'title4-600':
        return css`
          font-weight: 600;
          font-size: 28px;
          line-height: 35px;
        `

      case 'title4-500':
        return css`
          font-weight: 500;
          font-size: 28px;
          line-height: 35px;
        `

      case 'title5-600':
        return css`
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
        `
      case 'title5-500':
        return css`
          font-weight: 500;
          font-size: 24px;
          line-height: 30px;
        `

      case 'title6-600':
        return css`
          font-weight: 600;
          font-size: 20px;
          line-height: 25px;
        `

      case 'title6-500':
        return css`
          font-weight: 500;
          font-size: 20px;
          line-height: 25px;
        `

      case 'title7-600':
        return css`
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
        `

      case 'title7-500':
        return css`
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
        `

      default:
        return false
    }
  }};
`

export const ThemeParagraph = styled(BaseParagraph)`
  font-family: 'Inter';
  color: ${(props) => props.color};
  ${(props) => {
    switch (props.paragraphSize) {
      case 'body-1-400':
        return css`
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
        `

      case 'body-1-600':
        return css`
          font-weight: 600;
          font-size: 16px;
          line-height: 28px;
        `

      case 'body-2-400':
        return css`
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
        `

      case 'body-2-500':
        return css`
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
        `

      default:
        return false
    }
  }};
`
