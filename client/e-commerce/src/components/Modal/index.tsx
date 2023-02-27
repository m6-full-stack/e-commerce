import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Heading, Paragraph } from '../../styles/typography'
import { validationUserAnnouncement } from '../../validators/validationUserAnnouncement'

import { useForm, FieldValues } from 'react-hook-form'
import Button from '../Button'
import Input, { TextArea } from '../Input'
import { ModalContainer } from './style'

export const Modal = () => {
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
            Criar anúncio
          </Heading>
          <p
            className="closeModal"
            onClick={() => {
              console.log('Fechar Modal')
            }}
          >
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
            Tipo de anúncio
          </Paragraph>
          <div className="content-buttons">
            <Button variant="blue" buttonSize="b1profmodv">
              Venda
            </Button>
            <Button variant="blue" buttonSize="b1profmodedv">
              Leilão
            </Button>
          </div>
          <Paragraph
            fontWeight={500}
            size={'small'}
            color={'black'}
            lineHeight={'24px'}
          >
            Informações do veículo
          </Paragraph>
          <Input
            label="Título"
            placeholder="Digitar usuário"
            name="username"
            register={register}
            errosMessage={errors.username?.message?.toString()}
          />
          <div className="content-3-inputs">
            <div className="content-input">
              <Input
                label="Ano"
                placeholder="2018"
                name="year"
                register={register}
                errosMessage={errors.year?.message?.toString()}
              />
              <Input
                label="Quilometragem"
                placeholder="0"
                name="mileage"
                register={register}
                errosMessage={errors.mileage?.message?.toString()}
              />
            </div>
            <Input
              label="Preço"
              placeholder="50.000,00"
              name="mileage"
              register={register}
              errosMessage={errors.mileage?.message?.toString()}
            />
            <TextArea
              label="Descrição"
              placeholder="Digitar descrição"
              name="description"
              register={register}
              errosMessage={errors.description?.message?.toString()}
            />
          </div>

          <Paragraph
            fontWeight={500}
            size={'small'}
            color={'black'}
            lineHeight={'24px'}
          >
            Tipo de veículo
          </Paragraph>

          <div className="content-buttons-car-motor">
            <Button variant="blue" buttonSize="b1profmodv">
              Carro
            </Button>
            <Button variant="blue" buttonSize="b1profmodedv">
              Moto
            </Button>
          </div>

          <Input
            label="Imagem da capa"
            placeholder="https://image.com"
            name="imageCloak"
            register={register}
            errosMessage={errors.imageCloak?.message?.toString()}
          />
          <Input
            label="1° Imagem da galeria"
            placeholder="https://image.com"
            name="oneImage"
            register={register}
            errosMessage={errors.oneImage?.message?.toString()}
          />
          <Input
            label="2° Imagem da galeria"
            placeholder="https://image.com"
            name="twoImage"
            register={register}
            errosMessage={errors.twoImage?.message?.toString()}
          />

          <Button variant="brand4" buttonSize="b4profmodac">
            Adicionar campo para imagem da galeria
          </Button>

          <div className="content-buttons-car-motor">
            <Button variant="grey6" buttonSize="g6profmodcc">
              Cancelar
            </Button>
            <Button variant="brand3" buttonSize="b3profmodca">
              Criar anúncio
            </Button>
          </div>
        </form>
      </div>
    </ModalContainer>
  )
}
