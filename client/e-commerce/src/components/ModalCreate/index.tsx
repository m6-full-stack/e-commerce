import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { Heading, Paragraph } from '../../styles/typography'
import { validationUserAnnouncement } from '../../validators/validationUserAnnouncement'

import { useForm, FieldValues } from 'react-hook-form'
import Button from '../Button'
import Input, { TextArea } from '../Input'
import { ModalContainer } from './style'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import {
  AnnouncementContext,
  AnnouncementRequest,
} from '../../contexts/AnnouncementProvider/AnnouncementProvide'

export const ModalCreate = () => {
  const { setIsModelCreate } = useContext(ModalContext)
  const {
    registerAnnouncement,
    typeAnnouncement,
    setTypeAnnouncement,
    typeVehicle,
    setTypeVehicle,
  } = useContext(AnnouncementContext)

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
      <div className='content'>
        <div className='content-title'>
          <Heading
            level={2}
            fontWeight={500}
            size={'normal'}
            color={'grey1'}
            lineHeight={'20px'}
          >
            Criar anúncio
          </Heading>
          <p className='closeModal' onClick={() => setIsModelCreate(false)}>
            x
          </p>
        </div>

        <form onSubmit={handleSubmit((data) => registerAnnouncement(data))}>
          <Paragraph
            fontWeight={500}
            size={'small'}
            color={'black'}
            lineHeight={'24px'}
          >
            Tipo de anúncio
          </Paragraph>
          <div className='content-buttons'>
            <Button
              type='button'
              variant='blue'
              buttonSize='b1profmodv'
              onClick={() => setTypeAnnouncement('Venda')}
            >
              Venda
            </Button>
            <Button
              type='button'
              variant='transparent'
              buttonSize='tprofmodl'
              onClick={() => setTypeAnnouncement('Leilão')}
            >
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
            label='Título'
            placeholder='Digitar título'
            name='title'
            register={register}
            errosMessage={errors.title?.message?.toString()}
          />
          <div className='content-3-inputs'>
            <div className='content-input'>
              <Input
                label='Ano'
                placeholder='2018'
                name='year'
                register={register}
                errosMessage={errors.year?.message?.toString()}
              />
              <Input
                label='Quilometragem'
                placeholder='0'
                name='mileage'
                register={register}
                errosMessage={errors.mileage?.message?.toString()}
              />
            </div>
            <Input
              label='Preço'
              placeholder='50.000,00'
              name='price'
              register={register}
              errosMessage={errors.price?.message?.toString()}
            />
            <TextArea
              label='Descrição'
              placeholder='Digitar descrição'
              name='description'
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

          <div className='content-buttons'>
            <Button
              type='button'
              variant='blue'
              buttonSize='b1profmodv'
              onClick={() => setTypeVehicle('Carro')}
            >
              Carro
            </Button>
            <Button
              type='button'
              variant='transparent'
              buttonSize='tprofmodl'
              onClick={() => setTypeVehicle('Moto')}
            >
              Moto
            </Button>
          </div>

          <Input
            label='Imagem da capa'
            placeholder='https://image.com'
            name='cover_image'
            register={register}
            errosMessage={errors.cover_image?.message?.toString()}
          />
          <Input
            label='1° Imagem da galeria'
            placeholder='https://image.com'
            name='oneImage'
            register={register}
            errosMessage={errors.oneImage?.message?.toString()}
          />
          <Input
            label='2° Imagem da galeria'
            placeholder='https://image.com'
            name='twoImage'
            register={register}
            errosMessage={errors.twoImage?.message?.toString()}
          />

          <Button type='button' variant='brand4' buttonSize='b4profmodac'>
            Adicionar campo para imagem da galeria
          </Button>

          <div className='content-buttons-create'>
            <Button
              type='button'
              variant='grey6'
              buttonSize='g6profmodcc'
              onClick={() => setIsModelCreate(false)}
            >
              Cancelar
            </Button>
            <Button type='submit' variant='brand3' buttonSize='b3profmodca'>
              Criar anúncio
            </Button>
          </div>
        </form>
      </div>
    </ModalContainer>
  )
}
