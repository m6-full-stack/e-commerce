import Input from '../../components/Input'
import { RecoverContainer } from './style'

import { FieldValues, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../../components/Button'
import { useContext, useEffect, useState } from 'react'
import { validationMail } from '../../validators/validationMail'
import { validationCode } from '../../validators/validationCode'
import { validationRecoverPassword } from '../../validators/validationRecoverPassword'
import { UserContext } from '../../contexts/UserProvider/UserProvider'

export const RecoverPassword = () => {
  const {
    sendMailRecoverPassword,
    navigate,
    tokenRecoverPassword,
    changePassword,
  } = useContext(UserContext)
  const [haveAcess, setHaveAccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(
      tokenRecoverPassword === null
        ? validationMail
        : haveAcess
        ? validationRecoverPassword
        : validationCode
    ),
  })
  useEffect(() => {}, [tokenRecoverPassword])

  const onSubmit = (data: any) => {
    if (data.code === tokenRecoverPassword) {
      setHaveAccess(true)
    }
  }
  return (
    <>
      {tokenRecoverPassword === null ? (
        <RecoverContainer>
          <div>
            <h1>Recuperar senha:</h1>
            <h2>
              Insira o e-mail da sua conta abaixo para receber o código de {''}
              <span>recuperação!</span>
            </h2>
            <form
              onSubmit={handleSubmit((data) =>
                sendMailRecoverPassword({ email: data.email })
              )}
            >
              <Input
                label='Email'
                placeholder='Digite o email da sua conta'
                name='email'
                register={register}
                errosMessage={errors.email?.message?.toString()}
              />
              <Button variant='blue' buttonSize='b1e'>
                Enviar
              </Button>
            </form>
          </div>
        </RecoverContainer>
      ) : haveAcess ? (
        <RecoverContainer>
          <div>
            <h1>Recuperar senha:</h1>
            <h2>
              Insira sua nova <span>senha</span> abaixo{' '}
              <span>código de recuperação!</span>
            </h2>
            <form
              onSubmit={handleSubmit((data) =>
                changePassword(tokenRecoverPassword, data.password)
              )}
            >
              <Input
                label='Senha'
                placeholder='Digite sua senha aqui'
                name='password'
                defaultValue=''
                register={register}
                errosMessage={errors.password?.message?.toString()}
              />
              <Input
                label='Confirme sua senha'
                placeholder='Confirme sua senha aqui'
                name='confirmPassword'
                defaultValue=''
                register={register}
                errosMessage={errors.confirmPassword?.message?.toString()}
              />
              <Button variant='blue' buttonSize='b1e'>
                Enviar
              </Button>
            </form>
          </div>
        </RecoverContainer>
      ) : (
        <RecoverContainer>
          <div>
            <h1>Recuperar senha:</h1>
            <h2>
              Insira o <span>código de recuperação!</span>
            </h2>
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
              <Input
                label=''
                placeholder='Digite o código de verificação'
                name='code'
                register={register}
                errosMessage={errors?.code?.message?.toString()}
              />
              <Button variant='blue' buttonSize='b1e'>
                Enviar
              </Button>
            </form>
          </div>
        </RecoverContainer>
      )}
    </>
  )
}
