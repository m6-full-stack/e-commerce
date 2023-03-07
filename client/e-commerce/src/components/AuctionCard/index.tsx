import React, { useContext, useState } from 'react'
import { AuctionCardContainer } from './style'

import { AiOutlineClockCircle } from 'react-icons/ai'
import Button from '../Button'
import { Heading, Paragraph } from '../../styles/typography'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'

import countDownTimer from '../../utils/countDown'
import { AnnouncementData } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { string } from 'yup'
import { ProductsContext, ProductsContextProvider } from '../../contexts/ProductsProvider/ProductsProvider'

interface AuctionCardProps {
  vehicle: AnnouncementData
}

export const AuctionCard = ({ vehicle }: AuctionCardProps) => {
  const { setIsModelEditAnnouncement } = useContext(ModalContext)
  const { actualPage } = useContext(ProductsContext)
  const [ actualImageBackground, setActualImageBackground ] = useState(string)


  return (
    <AuctionCardContainer vehicle={vehicle}>
      <div className="content-auction">
        <section className="content-auction-title">
          <div className="container-clocker">
            <AiOutlineClockCircle className="Icons" />
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
            fontWeight={400}
            size={'normal'}
            color={'grey5'}
            lineHeight={'28px'}
          >
            {vehicle.description}
          </Paragraph>
          <div className="content-price">
            <section className="container-year">
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
              <Button
                variant="transparent"
                buttonSize="tprofe"
                onClick={() => setIsModelEditAnnouncement(true)}
              >
                <p>Acessar página do leilão</p>
                <FontAwesomeIcon icon="fa-light fa-arrow-right" />
              </Button>
            </>
          ):(
            <>
              <Button
                variant="transparent"
                buttonSize="tprofe"
                onClick={() => setIsModelEditAnnouncement(true)}
              >
                Editar
              </Button>
              <Button variant="transparent" buttonSize="tprofvc">
                Ver como
              </Button>
            </>
          )}
        </footer>
      </div>
    </AuctionCardContainer>
  )
}
