import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import Input, { TextArea } from '../../components/Input'

// import Button from '../../components/Button'
import Button from '../../components/Button'

import { Heading, Paragraph } from '../../styles/typography'
import { validationRegister } from '../../validators/validationRegister'

import { RegisterContainer } from './style'

export const Register = () => {
  function onSubmit(data: FieldValues) {
    console.log(data)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationRegister),
  })

  return (
    <RegisterContainer>
      <div>
        <Heading
          className="title-register"
          level={2}
          fontWeight={500}
          size={'plus'}
          color={'black'}
          lineHeight={'20px'}
        >
          Cadastro
        </Heading>
        <form>
          <div className='teste12'>
            <Paragraph
              fontWeight={500}
              size={'small'}
              color={'grey2'}
              lineHeight={'24px'}
            >
              Informações pessoais
            </Paragraph>
            <Input
              label="Nome"
              placeholder="Ex: Samuel Leão"
              name="name"
              register={register}
              errosMessage={errors.name?.message?.toString()}
            />
            <Input
              label="Email"
              placeholder="Ex: samuel@kenzie.com.br"
              name="email"
              register={register}
              errosMessage={errors.email?.message?.toString()}
            />
            <Input
              label="CPF"
              placeholder="000.000.000-00"
              name="cpf"
              register={register}
              errosMessage={errors.cpf?.message?.toString()}
            />
            <Input
              label="Celular"
              placeholder="(DDD) 90000-0000"
              name="phone"
              register={register}
              errosMessage={errors.phone?.message?.toString()}
            />
            <Input
              label="Data de nascimento"
              placeholder="00/00/00"
              name="phone"
              register={register}
              errosMessage={errors.phone?.message?.toString()}
            />
            <TextArea
              label="Descrição"
              placeholder="Digitar descrição"
              name="description"
              register={register}
              errosMessage={errors.description?.message?.toString()}
            />
          </div>

          <Input
            label="CEP"
            placeholder="00000.000"
            name="cep"
            register={register}
            errosMessage={errors.cep?.message?.toString()}
          />
        </form>
      </div>
    </RegisterContainer>
  )
}
