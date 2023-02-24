import styled, { css } from 'styled-components'

const theme = {
  colors: {
    brand1: '#4529E6',
    brand2: '#5126EA',
    brand3: '#03B898',
    brand4: '#EDEAFD',

    grey0: '#0B0D0D',
    grey1: '#212529',
    grey2: '#495057',
    grey3: '#868E96',
    grey4: '#ADB5BD',
    grey5: '#CED4DA',
    grey6: '#DEE2E6',
    grey7: '#E9ECEF',
    grey8: '#F1F3F5',
    grey9: '#F8F9FA',
    grey10: '#FDFDFD',
    whiteFixed: '#FFFFFF',
    black: '#000000',

    alert1: '#CD2B31',
    alert2: '#FDD8D8',
    alert3: '#FFE5E5',
    sucess1: '#18794E',
    sucess2: '#CCEBD7',
    sucess3: '#DDF3E4',

    random1: '#E34D8C',
    random2: '#C04277',
    random3: '#7D2A4D',
    random4: '#7000FF',
    random5: '#6200E3',
    random6: '#36007D',
    random7: '#349974',
    random8: '#2A7D5F',
    random9: '#153D2E',
    random10: '#6100FF',
    random11: '#5700E3',
    random12: '#30007D',
  },
  sizes: {
    small: '0.875rem',
    normal: '1rem',
    plus: '1.25rem',
    large: '1.5rem',
    xlarge: '2.25rem',
  },
}

// tipagem
export type HeadingProps = {
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.sizes
  fontWeight?: 400 | 500 | 600 | 700
  lineHeight?: string | number
  level?: 1 | 2 | 3 | 4 | 5 | 6
  fontFamily?: string
}

export type ParagraphProps = {
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.sizes
  fontWeight?: 400 | 500 | 600 | 700
  lineHeight?: string | number
  fontFamily?: string
}

// padrão h1 e verifico os atributos(nesse caso level) da tipagem, utilizo o as para dizer como e quero que se comporte e faço um interpolação em seguida passo a estilização

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    color = 'grey1',
    size = 'normal',
    fontWeight,
    lineHeight,
    fontFamily = 'Lexend',
  }) => css`
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    fontFamily = ${fontFamily};
  `}
`

export const Paragraph = styled.p<ParagraphProps>`
  ${({
    color = 'grey1',
    size = 'normal',
    fontWeight,
    lineHeight,
    fontFamily = 'Inter',
  }) => css`
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    font-family: ${fontFamily};
  `}
`
