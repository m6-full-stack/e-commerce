import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { Heading, Paragraph } from '../../styles/typography'
import { validationUserAnnouncement } from '../../validators/validationUserAnnouncement'

import { useForm, FieldValues } from 'react-hook-form'
import Button from '../Button'
import Input, { TextArea } from '../Input'
import { ModalContainer } from './style'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'

export const ModalEditAddress = () => {
  const { setIsModelEditAddress, updateAddress } = useContext(ModalContext)

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    updateAddress(data)
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
            Editar endereço
          </Heading>
          <p
            className="closeModal"
            onClick={() => setIsModelEditAddress(false)}
          >
            x
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Paragraph
            fontWeight={500}
            size={'small'}
            color={'black'}
            lineHeight={'24px'}
          >
            Informações de endereço
          </Paragraph>

          <Input
            label="CEP"
            placeholder="89888.888"
            name="cep"
            register={register}
            errosMessage={errors.cep?.message?.toString()}
          />

          <div className="content-input">
            <Input
              label="Estado"
              placeholder="Paraná"
              name="state"
              register={register}
              errosMessage={errors.state?.message?.toString()}
            />
            <Input
              label="Cidade"
              placeholder="Curitiba"
              name="city"
              register={register}
              errosMessage={errors.city?.message?.toString()}
            />
          </div>

          <Input
            label="Rua"
            placeholder="Rua do paraná"
            name="street"
            register={register}
            errosMessage={errors.cep?.message?.toString()}
          />

          <div className="content-input">
            <Input
              label="Número"
              placeholder="1029"
              name="number"
              register={register}
              errosMessage={errors.number?.message?.toString()}
            />
            <Input
              label="Complemento"
              placeholder="Apart 12"
              name="complement"
              register={register}
              errosMessage={errors.complement?.message?.toString()}
            />
          </div>

          <div className="content-buttons-create">
            <Button
              variant="grey6"
              buttonSize="g6profmodcc"
              onClick={() => setIsModelEditAddress(false)}
            >
              Cancelar
            </Button>
            <Button variant="brand3" buttonSize="b3profmodca">
              Salvar alterações
            </Button>
          </div>
        </form>
      </div>
    </ModalContainer>
  )
}
