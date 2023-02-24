import React from 'react'
import { AuctionCardContainer } from './style'

import { AiOutlineClockCircle } from 'react-icons/ai'
import Button from '../Button'
import { Heading, Paragraph } from '../../styles/typography'

export const AuctionCard = () => {
  return (
    <AuctionCardContainer>
      <div className="content-auction">
        <section className="content-auction-title">
          <div className="container-clocker">
            <AiOutlineClockCircle className="Icons" />
            <span>01:58:00</span>
          </div>
          <Heading
            level={2}
            fontWeight={600}
            size={'plus'}
            color={'grey10'}
            lineHeight={'25px'}
          >
            Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes
          </Heading>
          <Paragraph
            fontWeight={400}
            size={'normal'}
            color={'grey5'}
            lineHeight={'28px'}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </Paragraph>
          <div className="content-price">
            <section className="container-year">
              <span>2013</span>
              <span>0 km</span>
            </section>
            <Heading
              level={3}
              fontWeight={500}
              color={'whiteFixed'}
              lineHeight={'20px'}
            >
              R$ 78.500,00
            </Heading>
          </div>
        </section>

        <footer>
          <Button variant="transparent" buttonSize="tprofe">
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
