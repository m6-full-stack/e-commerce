import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

// import Button from '../../components/Button'
import Input from '../../components/Input'
import { LoginContainer } from './style'
import Button from '../../components/Button'
import { Heading, Paragraph } from '../../styles/typography'

export const Login = () => {
  function onSubmit(data) {
    console.log(data)
  }

  const validationUser = yup.object().shape({
    username: yup.string().required('O username é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(8, 'A senha deve conter no minímo 8 caracteres'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationUser),
  })

  return (
    <LoginContainer>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading
            level={2}
            fontWeight={500}
            color={'000000'}
            lineHeight={'20px'}
          >
            Login
          </Heading>
          <div className="container__info">
            <Input
              label="Usuário"
              placeholder="Digitar usuário"
              name="username"
              register={register}
              errosMessage={errors.username?.message?.toString()}
            />
            <Input
              label="Senha"
              placeholder="Digitar senha"
              name="password"
              register={register}
              errosMessage={errors.password?.message?.toString()}
            />
            <div className="teste">
              <Paragraph
                className="password"
                fontWeight={500}
                size={'small'}
                color={'grey2'}
                lineHeight={'24px'}
              >
                Esqueci minha senha
              </Paragraph>
              <Button variant="blue" buttonSize="b1e">
                Entrar
              </Button>
            </div>

            <div className="teste1">
              <Paragraph
                className="teste1"
                fontWeight={400}
                size={'small'}
                color={'grey2'}
                lineHeight={'24px'}
              >
                Ainda não possui conta?
              </Paragraph>
              <Button variant="transparent" buttonSize="g4c">
                Cadastrar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </LoginContainer>
  )
}
