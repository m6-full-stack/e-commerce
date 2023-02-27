import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { Heading, Paragraph } from '../../styles/typography'
import { validationUserAnnouncement } from '../../validators/validationUserAnnouncement'

import { useForm, FieldValues } from 'react-hook-form'
import Button from '../Button'
import Input, { TextArea } from '../Input'
import { ModalContainer } from './style'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'

export const ModalEdit = () => {
  const { setIsModelCreate, setIsModelEdit } = useContext(ModalContext)

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationUserAnnouncement),
  })
  return (
    <ModalContainer>
      <div className="content">
        <div className="content-title">
          <Heading
            level={2}
            fontWeight={500}
            size={'normal'}
            color={'grey1'}
            lineHeight={'20px'}
          >
            Editar perfil
          </Heading>
          <p className="closeModal" onClick={() => setIsModelEdit(false)}>
            x
          </p>
        </div>

        <form>
          <Paragraph
            fontWeight={500}
            size={'small'}
            color={'black'}
            lineHeight={'24px'}
          >
            informações pessoais
          </Paragraph>

          <Input
            label="Nome"
            placeholder="Ex: Samuel Leão"
            name="username"
            register={register}
            errosMessage={errors.username?.message?.toString()}
          />
          
          <Input
            label="Email"
            placeholder="samuel@kenzie.com.br"
            name="email"
            register={register}
            errosMessage={errors.email?.message?.toString()}
          />

          <Input
            label="CPF"
            placeholder="900.880.090-00"
            name="cpf"
            register={register}
            errosMessage={errors.cpf?.message?.toString()}
          />

          <Input
            label="Celular"
            placeholder="(084) 90909-9092"
            name="cellphone"
            register={register}
            errosMessage={errors.cellphone?.message?.toString()}
          />

          <Input
            label="Data de nascimento"
            placeholder="09/12/99"
            name="birthday"
            register={register}
            errosMessage={errors.birthday?.message?.toString()}
          />

          <TextArea
            label="Descrição"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            name="description"
            register={register}
            errosMessage={errors.description?.message?.toString()}
          />

          <div className="content-buttons-create">
            <Button variant="grey6" buttonSize="g6profmodcc">
              Cancelar
            </Button>
            <Button variant="blue" buttonSize="b3profmodsa">
              Salvar alterações
            </Button>
          </div>
        </form>
      </div>
    </ModalContainer>
  )
}
