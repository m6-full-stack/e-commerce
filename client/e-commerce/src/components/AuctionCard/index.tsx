import React, { useContext } from 'react'
import { AuctionCardContainer } from './style'

import { AiOutlineClockCircle } from 'react-icons/ai'
import Button from '../Button'
import { Heading, Paragraph } from '../../styles/typography'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'

import countDownTimer from '../../utils/countDown'
import { AnnouncementData } from '../../contexts/AnnouncementProvider/AnnouncementProvide'

interface AuctionCardProps {
  vehicle: AnnouncementData
}

export const AuctionCard = ({ vehicle }: AuctionCardProps) => {
  const { setIsModelEditAnnouncement } = useContext(ModalContext)
  return (
    <AuctionCardContainer>
      <div className="content-auction">
        <section className="content-auction-title">
          <div className="container-clocker">
            <AiOutlineClockCircle className="Icons" />
            <time>{countDownTimer('00:00:10')}</time>
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
        </footer>
      </div>
    </AuctionCardContainer>
  )
}
