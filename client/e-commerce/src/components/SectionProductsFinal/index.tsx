import { useContext, useState } from 'react'

import { AnnouncementContext } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { Heading, Paragraph } from '../../styles/typography'
import Button from '../Button'
import { SectionProductsFinalStyle } from './style'

export const SectionProductsFinal = () => {
  const { announcementInfo } = useContext(AnnouncementContext)


  return (
    <SectionProductsFinalStyle>
      {/* img car */}
      <figure className="content-card-car">
        <img className='te' src={announcementInfo.cover_image} alt="car" />
        {!announcementInfo.cover_image && <p>Carregando imagem...</p>}
      </figure>
      {/* fim img car */}

      {/* info car */}
      <section className="content-year-and-price">
        <Heading
          className="title-register"
          level={2}
          fontWeight={400}
          size={'plus'}
          color={'grey1'}
          lineHeight={'25px'}
        >
          {announcementInfo.title}
        </Heading>
        <div className="content-year">
          <div className="border">
            <Paragraph
              fontWeight={500}
              size={'small'}
              color={'brand1'}
              lineHeight={'1.5rem'}
            >
              {announcementInfo.year}
            </Paragraph>
          </div>
          <div className="border">
            <Paragraph
              fontWeight={500}
              size={'small'}
              color={'brand1'}
              lineHeight={'1.5rem'}
            >
              {`${announcementInfo.mileage}`}
            </Paragraph>
          </div>
        </div>
        <div className="content-price">
          <Heading
            fontWeight={500}
            level={3}
            size={'normal'}
            color={'grey1'}
            lineHeight={'1.25rem'}
          >
            {`R$ ${announcementInfo.price}`}
          </Heading>
        </div>
        <div className="content-button">
          <Button variant="blue" buttonSize="b1pc">
            Comprar
          </Button>
        </div>
      </section>
      {/* fim info car */}

      {/* descrição */}
      <div className="content-description">
        <Heading
          fontWeight={600}
          level={3}
          size={'plus'}
          color={'grey1'}
          lineHeight={'25px'}
        >
          Descrição
        </Heading>
        <Paragraph
          fontWeight={500}
          size={'normal'}
          color={'grey2'}
          lineHeight={'1.75rem'}
        >
          {announcementInfo.description}
        </Paragraph>
      </div>
    </SectionProductsFinalStyle>
  )
}
