import { IProps } from '../../interfaces/interface'
import { ButtonContainer } from './style'

const Button = ({
  children,
  onClick,
  variant = 'blue',
  buttonSize,
  disabled = false,
  className,
  type
}: IProps) => {
  return (
    <ButtonContainer
      variant={variant}
      className={className}
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
