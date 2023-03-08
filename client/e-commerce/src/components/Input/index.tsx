import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { InputText2 } from '../ActualUserComment/styles'
import { InputContainer, InputContainer2 } from './style'

export interface IValues {}

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  register: UseFormRegister<FieldValues>
  errosMessage?: string
}

const Input = ({
  name,
  placeholder,
  type,
  label,
  register,
  errosMessage,
  defaultValue,
}: IPropsInput) => {
  return (
    <InputContainer>
      <div>
        <label htmlFor={name}>{label}</label>

        <input
          id={name.toLowerCase()}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          defaultValue={defaultValue}
        />
      </div>
      <p className="error__message">{errosMessage}</p>
    </InputContainer>
  )
}

export const Input2 = ({
  name,
  placeholder,
  type,
  label,
  register,
  errosMessage,
  defaultValue,
}: IPropsInput) => {
  return (
    <InputContainer2>
      <div>
        <label htmlFor={name}>{label}</label>

        <input
          id={name.toLowerCase()}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          defaultValue={defaultValue}
        />
      </div>
      <p className="error__message">{errosMessage}</p>
    </InputContainer2>
  )
}

export const TextArea = ({
  name,
  placeholder,
  label,
  register,
  errosMessage,
  defaultValue
}: IPropsInput) => {
  return (
    <InputContainer>
      <div>
        <label htmlFor={name}>{label}</label>
        <textarea
          cols={20}
          rows={3}
          id={name.toLowerCase()}
          placeholder={placeholder}
          {...register(name)}
          defaultValue={defaultValue}
        />
      </div>
      <p className="error__message">{errosMessage}</p>
    </InputContainer>
  )
}
export default Input
