import { IProps } from '../../interfaces/interface'
import { ButtonContainer } from './style'

const Button = ({
  children,
  onClick,
  variant = 'blue',
  buttonSize,
  disabled = false,
  type
}: IProps) => {
  return (
    <ButtonContainer
      variant={variant}
      buttonSize={buttonSize}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
