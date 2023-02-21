import React from 'react'
import car from '../../assets/car.svg'
import { Heading, Paragraph } from '../../styles/typography'
import { CardContainer } from './style'

export const Card = () => {
  return (
    <CardContainer>
      <section>
        <div className="content-img">
          <img src={car} alt="foto de carro" />
        </div>
        <div className="content-description">
          <Heading
            level={3}
            fontWeight={600}
            color={'grey1'}
            lineHeight={'20px'}
          >
            Product title stays here - max 1 line
          </Heading>
          <Paragraph
            fontWeight={400}
            size={'small'}
            color={'grey2'}
            lineHeight={'24px'}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </Paragraph>
          <div className="content-name">
            <div className="content-border">
              <Paragraph
                fontWeight={500}
                size={'small'}
                color={'whiteFixed'}
                lineHeight={'0'}
              >
                SL
              </Paragraph>
            </div>
            <Paragraph
              fontWeight={500}
              size={'small'}
              color={'grey2'}
              lineHeight={'1.5rem'}
            >
              Samuel Leão
            </Paragraph>
          </div>
          <section className="content-year-and-price">
            <div className="content-year">
              <div className="border">
                <Paragraph
                  fontWeight={500}
                  size={'small'}
                  color={'brand1'}
                  lineHeight={'1.5rem'}
                >
                  0 KM
                </Paragraph>
              </div>
              <div className="border">
                <Paragraph
                  fontWeight={500}
                  size={'small'}
                  color={'brand1'}
                  lineHeight={'1.5rem'}
                >
                  2019
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
                R$ 00.000,00
              </Heading>
            </div>
          </section>
        </div>
      </section>
    </CardContainer>
  )
}
