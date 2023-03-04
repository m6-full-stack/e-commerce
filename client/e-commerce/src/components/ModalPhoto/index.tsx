import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { Heading, Paragraph } from '../../styles/typography'
import { validationUserAnnouncement } from '../../validators/validationUserAnnouncement'

import { useForm, FieldValues } from 'react-hook-form'
import Button from '../Button'

import { ModalContainer } from './style'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'

import car1 from '../../assets/images/car_1.svg'

export const ModalPhoto = () => {
  const { setIsModelPhoto } = useContext(ModalContext)

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
            Imagem do veículo
          </Heading>

          <p className="closeModal" onClick={() => setIsModelPhoto(false)}>
            x
          </p>
        </div>

     

          <div className="content-img">
            <img src={car1}/>
          </div>
      </div>
    </ModalContainer>
  )
}
