import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { Heading, Paragraph } from '../../styles/typography'
import { validationUserAnnouncement } from '../../validators/validationUserAnnouncement'

import { useForm, FieldValues } from 'react-hook-form'
import Button from '../Button'

import { ModalContainer } from './style'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { AnnouncementContext } from '../../contexts/AnnouncementProvider/AnnouncementProvide'

export const ModalDelete = () => {
  const { setIsModelDelete } = useContext(ModalContext)
  const { announcementId, deleteAnnouncement } = useContext(AnnouncementContext)

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
            Excluir anúncio
          </Heading>

          <p className='closeModal' onClick={() => setIsModelDelete(false)}>
            x
          </p>
        </div>

        <form>
          <Heading
            level={2}
            fontWeight={500}
            size={'normal'}
            color={'grey1'}
            lineHeight={'20px'}
          >
            Tem certeza que deseja remover este anúncio?
          </Heading>

          <Paragraph
            fontWeight={400}
            size={'normal'}
            color={'grey2'}
            lineHeight={'28px'}
          >
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </Paragraph>

          <div className='content-buttons-create'>
            <Button
              variant='grey6'
              buttonSize='g6profmodvac'
              onClick={() => setIsModelDelete(false)}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {
                deleteAnnouncement(announcementId!)
              }}
              variant='alert1'
              buttonSize='a1profmodvse'
            >
              Sim, excluir anúncio
            </Button>
          </div>
        </form>
      </div>
    </ModalContainer>
  )
}
