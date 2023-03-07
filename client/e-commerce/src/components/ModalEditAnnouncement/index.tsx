import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Heading, Paragraph } from '../../styles/typography'
import { validationUserAnnouncement } from '../../validators/validationUserAnnouncement'

import { useForm, FieldValues } from 'react-hook-form'
import Button from '../Button'
import Input, { TextArea } from '../Input'
import { ModalContainer } from './style'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { AnnouncementContext } from '../../contexts/AnnouncementProvider/AnnouncementProvide'

export const ModalEditAnnouncement = () => {
  const { setIsModelDelete, setIsModelEditAnnouncement } =
    useContext(ModalContext)

  const {
    setTypeVehicle,
    setTypeAnnouncement,
    typeAnnouncement,
    announcementId,
    getRetriveAnnouncement,
    announcementInfo,
    updateAnnouncement,
  } = useContext(AnnouncementContext)

  const [publishedYesOrNo, setPublishedYesOrNo] = useState('no')

  useMemo(() => {
    if (announcementId) {
      getRetriveAnnouncement(announcementId)
    }
  }, [announcementId])

  const onSubmit = (data: FieldValues) => {
    console.log({ ...data, typeAnnouncement })
  }

  const closeModalEditannouncement = () => {
    setIsModelEditAnnouncement(false)
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
            Editar anúncio
          </Heading>
          <p
            className='closeModal'
            onClick={() => closeModalEditannouncement()}
          >
            x
          </p>
        </div>

        <form
          onSubmit={handleSubmit((data) =>
            updateAnnouncement(announcementId!, data)
          )}
        >
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
              onClick={() => setTypeAnnouncement('venda')}
            >
              Venda
            </Button>
            <Button
              type='button'
              variant='transparent'
              buttonSize='tprofmodl'
              onClick={() => setTypeAnnouncement('leilão')}
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
            placeholder='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200'
            name='title'
            defaultValue={announcementInfo.title}
            register={register}
            errosMessage={errors.title?.message?.toString()}
          />
          <div className='content-3-inputs'>
            <div className='content-input'>
              <Input
                label='Ano'
                placeholder='2018'
                name='year'
                defaultValue={announcementInfo.year}
                register={register}
                errosMessage={errors.year?.message?.toString()}
              />
              <Input
                label='Quilometragem'
                placeholder='0'
                name='mileage'
                defaultValue={announcementInfo.mileage}
                register={register}
                errosMessage={errors.mileage?.message?.toString()}
              />
            </div>
            <Input
              label='Preço'
              placeholder='50.000,00'
              name='price'
              defaultValue={announcementInfo.price}
              register={register}
              errosMessage={errors.price?.message?.toString()}
            />
            <TextArea
              label='Descrição'
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              name='description'
              defaultValue={announcementInfo.description}
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
              onClick={() => setTypeVehicle('carro')}
            >
              Carro
            </Button>
            <Button
              type='button'
              variant='transparent'
              buttonSize='tprofmodl'
              onClick={() => setTypeVehicle('moto')}
            >
              Moto
            </Button>
          </div>

          <Paragraph
            fontWeight={500}
            size={'small'}
            color={'black'}
            lineHeight={'24px'}
          >
            Publicado
          </Paragraph>

          <div className='content-buttons'>
            <Button
              type='button'
              variant='transparent'
              buttonSize='tprofmodl'
              onClick={() => setPublishedYesOrNo('yes')}
            >
              Sim
            </Button>

            <Button
              type='button'
              variant='blue'
              buttonSize='b1profmodv'
              onClick={() => setPublishedYesOrNo('no')}
            >
              Não
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
              buttonSize='g6profmodea'
              onClick={() => {
                setIsModelDelete(true)
                closeModalEditannouncement()
              }}
            >
              Excluir anúncio
            </Button>
            <Button
              type='submit'
              onClick={() => {
                closeModalEditannouncement()
              }}
              variant='brand3'
              buttonSize='b3profmodsa'
            >
              Salvar alterações
            </Button>
          </div>
        </form>
      </div>
    </ModalContainer>
  )
}
