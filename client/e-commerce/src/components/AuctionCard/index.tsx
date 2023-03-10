import React, { useContext } from 'react'
import { AuctionCardContainer } from './style'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Button from '../Button'
import { Heading, Paragraph } from '../../styles/typography'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import countDownTimer from '../../utils/countDown'
import { AnnouncementDataResponse } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { ProductsContext } from '../../contexts/ProductsProvider/ProductsProvider'
import { ButtonAuctionHomeStyle } from '../Button/style'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface AuctionCardProps {
  vehicle: AnnouncementDataResponse
}

export const AuctionCard = ({ vehicle }: AuctionCardProps) => {
  const { setIsModelEditAnnouncement } = useContext(ModalContext)
  const { actualPage } = useContext(ProductsContext)
  const navigate = useNavigate()
  const token = localStorage.getItem('@MOTORS-TOKEN')


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

                  if (!token){
                    toast.error('Fa??a seu login')
                  }
                  navigate(`/product/${vehicle.id}`)
                }}
              >
                <span>Acessar p??gina do leil??o</span>
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
