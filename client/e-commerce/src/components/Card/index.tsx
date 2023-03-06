import React from 'react'
import car from '../../assets/car.svg'
import { AnnouncementData } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { Heading, Paragraph } from '../../styles/typography'
import { CardContainer } from './style'

interface CardProps {
  isProfileView?: Boolean
}

interface AuctionCardProps {
  vehicle: AnnouncementData
}

export const Card = ({vehicle }:AuctionCardProps, { isProfileView }: CardProps) => {
  const isActive: boolean = false


  

  return (
    <CardContainer>
      <div className='content-img'>
        {isProfileView && (
          <span style={{ backgroundColor: vehicle.is_active ? '#4529E6' : '#ADB5BD' }}>
            {vehicle.is_active ? 'Ativo' : 'Inativo'}
          </span>
        )}
        <img src={vehicle.cover_image} alt='foto de carro' />
      </div>
      <div className='content-description'>
        <Heading level={3} fontWeight={600} color={'grey1'} lineHeight={'20px'}>
          {vehicle.title}
        </Heading>
        <Paragraph
          fontWeight={400}
          size={'small'}
          color={'grey2'}
          lineHeight={'24px'}
        >
          {vehicle.description}
        </Paragraph>
        <div className='content-name'>
          <div className='content-border'>
            <Paragraph
              fontWeight={500}
              size={'small'}
              color={'whiteFixed'}
              lineHeight={'0'}
            >
            {vehicle.advertiser.name.split(" ")[0][0].toUpperCase()}
            {vehicle.advertiser.name?.split(" ")[1] &&
              vehicle.advertiser.name?.split(" ")[1][0].toUpperCase()}
            </Paragraph>
          </div>
          <Paragraph
            fontWeight={700}
            size={'small'}
            color={'grey2'}
            lineHeight={'1.5rem'}
          >
            {vehicle.advertiser.name}
          </Paragraph>
        </div>
        <section className='content-year-and-price'>
          <div className='content-year'>
            <div className='border'>
              <Paragraph
                fontWeight={500}
                size={'small'}
                color={'brand1'}
                lineHeight={'1.5rem'}
              >
                {vehicle.mileage} Km
              </Paragraph>
            </div>
            <div className='border'>
              <Paragraph
                fontWeight={500}
                size={'small'}
                color={'brand1'}
                lineHeight={'1.5rem'}
              >
                {vehicle.year}
              </Paragraph>
            </div>
          </div>
          <div className='content-price'>
            <Heading
              fontWeight={500}
              level={3}
              size={'normal'}
              color={'grey1'}
              lineHeight={'1.25rem'}
            >
              R$ {vehicle.price},00
            </Heading>
          </div>
        </section>
      </div>
    </CardContainer>
  )
}
