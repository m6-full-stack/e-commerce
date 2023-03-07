import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: (event: any) => void
  variant?:
    | 'transparent'
    | 'alert1'
    | 'blue'
    | 'grey0'
    | 'grey1'
    | 'grey4'
    | 'grey6'
    | 'grey7'
    | 'grey10'
    | 'brand3'
    | 'brand4'
  buttonSize?: string
}
