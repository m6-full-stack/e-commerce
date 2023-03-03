import React, { useContext, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import Input, { TextArea } from '../../components/Input'

import Button from '../../components/Button'

import { Heading, Paragraph } from '../../styles/typography'
import { validationRegister } from '../../validators/validationRegister'

import { RegisterContainer } from './style'
import { UserContext } from '../../contexts/UserProvider/UserProvider'

export const Register = () => {
  const { handleRegister, setAdvertiserOrBuyer } =
    useContext(UserContext)

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
        <form onSubmit={handleSubmit((data) => handleRegister(data))}>
          <div className="content-p">
            <Paragraph
              fontWeight={500}
              size={'small'}
              color={'black'}
              lineHeight={'24px'}
            >
              Informações pessoais
            </Paragraph>
          </div>

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
            name="birthdate"
            register={register}
            errosMessage={errors.birthdate?.message?.toString()}
          />
          <TextArea
            label="Descrição"
            placeholder="Digitar descrição"
            name="description"
            register={register}
            errosMessage={errors.description?.message?.toString()}
          />

          <div className="content-p">
            <Paragraph
              fontWeight={500}
              size={'small'}
              color={'black'}
              lineHeight={'24px'}
            >
              Infomações de endereço
            </Paragraph>
          </div>

          <Input
            label="CEP"
            placeholder="00000.000"
            name="cep"
            register={register}
            errosMessage={errors.cep?.message?.toString()}
          />

          <div className="content-of-two">
            <Input
              label="Estado"
              placeholder="Digitar Estado"
              name="state"
              register={register}
              errosMessage={errors.state?.message?.toString()}
            />
            <Input
              label="Cidade"
              placeholder="Digitar cidade"
              name="city"
              register={register}
              errosMessage={errors.city?.message?.toString()}
            />
          </div>
          <Input
            label="Bairro"
            placeholder="Digitar bairro"
            name="district"
            register={register}
            errosMessage={errors.district?.message?.toString()}
          />
          <Input
            label="Rua"
            placeholder="Digitar rua"
            name="street"
            register={register}
            errosMessage={errors.street?.message?.toString()}
          />

          <div className="content-of-two">
            <Input
              label="Número"
              placeholder="Digitar número"
              name="number"
              register={register}
              errosMessage={errors.number?.message?.toString()}
            />
            <Input
              label="Complemento"
              placeholder="Ex: apart 307"
              name="complement"
              register={register}
              errosMessage={errors.complement?.message?.toString()}
            />
          </div>

          <div className="content-p">
            <Paragraph
              fontWeight={500}
              size={'small'}
              color={'black'}
              lineHeight={'24px'}
            >
              Tipo de conta
            </Paragraph>
          </div>

          <div className="content-buttons">
            <Button
              variant="blue"
              buttonSize="b1comp"
              type="button"
              onClick={() => setAdvertiserOrBuyer(false)}
            >
              Comprador
            </Button>
            <Button
              variant="transparent"
              buttonSize="g4anu"
              type="button"
              onClick={() => setAdvertiserOrBuyer(true)}
            >
              Anunciante
            </Button>
          </div>
          <Input
            label="Senha"
            placeholder="Digite senha"
            name="password"
            register={register}
            errosMessage={errors.password?.message?.toString()}
          />
          <Input
            label="Confirmar senha"
            placeholder="Digite senha"
            name="password"
            register={register}
            errosMessage={errors.password?.message?.toString()}
          />
          <Button variant="blue" buttonSize="b1fcad" type="submit">
            Finalizar cadastro
          </Button>
        </form>
      </div>
    </RegisterContainer>
  )
}
