import React, { useContext, useState } from 'react'
import { AuctionCardContainer } from './style'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Button from '../Button'
import { Heading, Paragraph } from '../../styles/typography'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import countDownTimer from '../../utils/countDown'
import { AnnouncementDataResponse } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { string } from 'yup'
import { ProductsContext } from '../../contexts/ProductsProvider/ProductsProvider'
import { ButtonAuctionHomeStyle } from '../Button/style'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserProvider/UserProvider'
import { toast } from 'react-toastify'

interface AuctionCardProps {
  vehicle: AnnouncementDataResponse
}

export const AuctionCard = ({ vehicle }: AuctionCardProps) => {
  const { setIsModelEditAnnouncement, setIsModalLoginNecessary } =
    useContext(ModalContext)
  const { actualPage } = useContext(ProductsContext)
  const { isLoaded } = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <AuctionCardContainer vehicle={vehicle}>
      <div className='content-auction'>
        <section className='content-auction-title'>
          <div className='container-clocker'>
            <AiOutlineClockCircle className='Icons' />
            <time>{countDownTimer('00:24:00')}</time>
          </div>
          <Heading
            level={2}
            fontWeight={600}
            size={'plus'}
            color={'grey10'}
            lineHeight={'25px'}
          >
            {vehicle.title}
          </Heading>
          <Paragraph
            className='description'
            fontWeight={400}
            size={'normal'}
            color={'grey5'}
            lineHeight={'28px'}
          >
            {vehicle.description}
          </Paragraph>
          <div className='content-price'>
            <section className='container-year'>
              <span>{vehicle.year}</span>
              <span>{vehicle.mileage} km</span>
            </section>
            <Heading
              level={3}
              fontWeight={500}
              color={'whiteFixed'}
              lineHeight={'20px'}
            >
              R$ {vehicle.price},00
            </Heading>
          </div>
        </section>
        <footer>
          {actualPage === 'home' ? (
            <>
              <ButtonAuctionHomeStyle
                onClick={() => {
                  if (!isLoaded) {
                    toast.error('Faça seu login')
                  }
                  navigate(`/product/${vehicle.id}`)
                }}
              >
                <span>Acessar página do leilão</span>
                <BsArrowRight size={25}></BsArrowRight>
              </ButtonAuctionHomeStyle>
            </>
          ) : (
            <>
              <Button
                variant='transparent'
                buttonSize='tprofe'
                onClick={() => setIsModelEditAnnouncement(true)}
              >
                Editar
              </Button>
              <Button variant='transparent' buttonSize='tprofvc'>
                Ver como
              </Button>
            </>
          )}
        </footer>
      </div>
    </AuctionCardContainer>
  )
}
