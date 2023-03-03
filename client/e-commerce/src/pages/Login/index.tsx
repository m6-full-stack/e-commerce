import React, { useContext } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

// import Button from '../../components/Button'
import Input from '../../components/Input'
import { LoginContainer } from './style'
import Button from '../../components/Button'
import { Heading, Paragraph } from '../../styles/typography'
import { validationLogin } from '../../validators/validationLogin'
import { UserContext } from '../../contexts/UserProvider/UserProvider'
import { Link } from 'react-router-dom'
import { ButtonNavLogin } from '../../components/Button/style'

export const Login = () => {
  const { handleLogin, navigate } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationLogin),
  })

  return (
    <LoginContainer>
      <div>
        <form onSubmit={handleSubmit((data) => handleLogin(data))}>
          <div className='title-login'>
            <Heading
              level={2}
              fontWeight={500}
              size={'large'}
              color={'black'}
              lineHeight={'20px'}
            >
              Login
            </Heading>
          </div>
          <div className='container__info'>
            <Input
              label='Email'
              placeholder='Digitar email'
              name='email'
              register={register}
              errosMessage={errors.email?.message?.toString()}
            />
            <Input
              label='Senha'
              placeholder='Digitar senha'
              name='password'
              register={register}
              errosMessage={errors.password?.message?.toString()}
            />
            <div className='teste'>
              <Paragraph
                className='password'
                fontWeight={500}
                size={'small'}
                color={'grey2'}
                lineHeight={'24px'}
                onClick={() => navigate('/recoverPassword')}
              >
                Esqueci minha senha
              </Paragraph>
              <Button variant='blue' buttonSize='b1e'>
                Entrar
              </Button>
            </div>

            <div className='teste1'>
              <Paragraph
                className='teste1'
                fontWeight={400}
                size={'small'}
                color={'grey2'}
                lineHeight={'24px'}
              >
                Ainda não possui conta?
              </Paragraph>
              <div className='button-hover'>
              <ButtonNavLogin to="/register">Cadastrar</ButtonNavLogin>
              </div>
            </div>
          </div>
        </form>
      </div>
    </LoginContainer>
  )
}
