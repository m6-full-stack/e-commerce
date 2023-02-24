import styled, { css } from 'styled-components'

type ButtonVariant =
  | 'transparent'
  | 'alert1'
  | 'blue'
  | 'grey0'
  | 'grey1'
  | 'grey4'
  | 'grey6'
  | 'grey10'
  | 'brand3'
  | 'brand4'

interface ButtonContainerProps {
  variant: ButtonVariant
  buttonSize?: string
}

const buttonVariants = {
  transparent: 'transparent',
  alert1: '#FDD8D8',
  blue: '#4529E6',
  brand3: '#B0A6F0',
  brand4: '#EDEAFD',
  grey0: '#0B0D0D',
  grey1: '#212529',
  grey4: '#ADB5BD',
  grey6: '#DEE2E6',
  grey10: '#FDFDFD',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;

  border-radius: 4px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;

  line-height: 0;

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}

  ${(props) => {
    switch (props.buttonSize) {
      //
      // buttomn carro e moto home
      case 'tcm':
        return css`
          height: 48px;
          max-width: 351px;
          padding: 12px 28px;
          color: ${(props) => props.theme.grey10};
          border: 1.5px solid ${(props) => props.theme.grey10};
          @media (min-width: 1024px) {
            max-width: 182.5px;
          }
        `

      // button grey4 header
      case 'g4h':
        return css`
          height: 48px;
          max-width: 133px;
          padding: 12px 28px;
          color: ${(props) => props.theme.grey0};
          border: 1.5px solid ${(props) => props.theme.grey4};
        `

      // button login cadastrar
      case 'g4c':
        return css`
          height: 48px;
          max-width: 315px;
          padding: 12px 28px;
          color: ${(props) => props.theme.grey0};
          border: 1.5px solid ${(props) => props.theme.grey4};
        `

      // button login azul entrar
      case 'b1e':
        return css`
          height: 48px;
          max-width: 315px;
          padding: 12px 28px;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.brand1};
        `
      // button register comprador
      case 'b1comp':
        return css`
          height: 48px;
          padding: 12px 28px;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.brand1};
          @media (min-width: 1024px) {
            max-width: 152px;
          }
        `

      // button register anuciante
      case 'g4anu':
        return css`
          height: 48px;
          padding: 12px 28px;
          color: ${(props) => props.theme.grey0};
          border: 1.5px solid ${(props) => props.theme.grey4};
          @media (min-width: 1024px) {
            max-width: 152px;
          }
        `

      // button register fin. cadastro
      case 'b1fcad':
        return css`
          height: 48px;
          padding: 12px 28px;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.brand1};
          @media (min-width: 1024px) {
            max-width: 315px;
          }
        `

      // button register modal ir para login
      case 'b1ml':
        return css`
          height: 38px;
          max-width: 134px;
          padding: 12px 20px;
          font-size: 0.875rem;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.brand1};
        `
      // button product comprar
      case 'b1pc':
        return css`
          height: 38px;
          max-width: 100px;
          padding: 12px 20px;
          font-size: 0.875rem;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.brand1};
        `

      // button product ver todos anuncios
      case 'g0pvta':
        return css`
          height: 48px;
          max-width: 240px;
          padding: 12px 28px;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.grey0};
        `

      // button product comentar
      case 'b1pcom':
        return css`
          height: 38px;
          max-width: 108px;
          padding: 12px 20px;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.brand1};
        `

      // button product inserir proposta
      case 'b1prop':
        return css`
          height: 48px;
          max-width: 182px;
          padding: 12px 28px;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.brand1};
        `

      // button profile editar
      case 'tprofe':
        return css`
          height: 38px;
          max-width: 132px;
          padding: 12px 20px;
          font-size: 0.875rem;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.grey10};
          @media (min-width: 1024px) {
            max-width: 80px;
          }
        `
      // button profile criar anuncio
      case 'tprofca':
        return css`
          height: 48px;
          max-width: 160px;
          padding: 12px 20px;
          font-size: 0.875rem;
          color: ${(props) => props.theme.brand1};
          border: 1.5px solid ${(props) => props.theme.brand1};
        `

      // button profile ver como
      case 'tprofvc':
        return css`
          height: 38px;
          max-width: 132px;
          padding: 12px 20px;
          font-size: 0.875rem;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.grey10};
          @media (min-width: 1024px) {
            max-width: 110px;
          }
        `

      // button profile editar small
      case 'tprofesm':
        return css`
          height: 38px;
          max-width: 80px;
          padding: 12px 20px;
          font-size: 0.875rem;
          color: ${(props) => props.theme.grey1};
          border: 1.5px solid ${(props) => props.theme.grey1};
        `

      // button profile ver como small
      case 'tprofvcsm':
        return css`
          height: 38px;
          max-width: 110px;
          padding: 12px 20px;
          font-size: 0.875rem;
          color: ${(props) => props.theme.grey1};
          border: 1.5px solid ${(props) => props.theme.grey1};
        `

      // button profile modal editar anuncio venda
      case 'b1profmodedv':
        return css`
          height: 48px;
          padding: 12px 28px;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.brand1};
          @media (min-width: 1024px) {
            max-width: 228px;
          }
        `

      // button profile modal editar anuncio venda
      case 'tprofmodl':
        return css`
          height: 48px;
          padding: 12px 28px;
          color: ${(props) => props.theme.grey0};
          border: 1.5px solid ${(props) => props.theme.grey4};
          @media (min-width: 1024px) {
            max-width: 228px;
          }
        `

      // button profile modal editar anuncio adicionar campo
      case 'b4profmodac':
        return css`
          height: 38px;
          padding: 12px 28px;
          font-size: 0.875rem;
          color: ${(props) => props.theme.brand1};
          border: 1.5px solid ${(props) => props.theme.brand4};
          @media (min-width: 1024px) {
            max-width: 335px;
          }
        `

      // button profile modal editar anuncio excluir anuncio
      case 'g6profmodea':
        return css`
          height: 48px;
          padding: 12px 28px;

          color: ${(props) => props.theme.grey2};
          border: 1.5px solid ${(props) => props.theme.grey6};
          @media (min-width: 1024px) {
            max-width: 262px;
          }
        `

      // button profile modal editar anuncio salvar alterações
      case 'b3profmodsa':
        return css`
          height: 48px;
          padding: 12px 28px;

          color: ${(props) => props.theme.brand4};
          border: 1.5px solid ${(props) => props.theme.brand3};
          @media (min-width: 1024px) {
            max-width: 193px;
          }
        `

      // button profile modal criar anuncio cancelar
      case 'g6profmodcc':
        return css`
          height: 48px;
          padding: 12px 28px;

          color: ${(props) => props.theme.grey2};
          border: 1.5px solid ${(props) => props.theme.grey6};
          @media (min-width: 1024px) {
            max-width: 126px;
          }
        `

      // button profile modal criar anuncio criar anuncio
      case 'b3profmodca':
        return css`
          height: 48px;
          padding: 12px 28px;
          max-width: 159px;
          color: ${(props) => props.theme.brand4};
          border: 1.5px solid ${(props) => props.theme.brand3};
          @media (min-width: 1024px) {
            max-width: 193px;
          }
        `

      // button profile modal criar anuncio criar anuncio
      case 'b4profmodca':
        return css`
          height: 48px;
          padding: 12px 28px;
          max-width: 159px;
          color: ${(props) => props.theme.grey0};
          border: 1px solid ${(props) => props.theme.brand2};
          @media (min-width: 1024px) {
            max-width: 193px;
          }
        `

      // button profile modal delete anuncio Cancelar
      case 'g6profmodvac':
        return css`
          height: 48px;
          padding: 12px 28px;
          color: ${(props) => props.theme.grey2};
          border: 1.5px solid ${(props) => props.theme.brand3};
          @media (min-width: 1024px) {
            max-width: 126px;
          }
        `

      // button profile modal delete anuncio sim, excluir
      case 'a1profmodvse':
        return css`
          height: 48px;
          max-width: 214px;
          padding: 12px 28px;
          color: ${(props) => props.theme.grey2};
          border: 1.5px solid ${(props) => props.theme.brand3};
        `

      // button profile modal editar anuncio Cancelar
      case 'g6profmodec':
        return css`
          height: 48px;
          max-width: 113px;
          padding: 12px 28px;
          color: ${(props) => props.theme.grey2};
          border: 1.5px solid ${(props) => props.theme.grey6};
          @media (min-width: 1024px) {
            max-width: 126px;
          }
        `

      // button profile modal editar anuncio Salvar alterações
      case 'b1profmodesa':
        return css`
          height: 48px;
          max-width: 192px;
          padding: 12px 28px;
          color: ${(props) => props.theme.whiteFixed};
          border: 1.5px solid ${(props) => props.theme.brand1};
        `

      default:
        return false
    }
  }};

  &:disabled {
    background-color: ${(props) => props.theme.grey5};
    border: 1.5px solid ${(props) => props.theme.grey5};
    cursor: not-allowed;
  }
`
