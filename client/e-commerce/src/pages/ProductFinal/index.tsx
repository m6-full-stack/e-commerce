import React, { useState } from 'react'
import { Card } from '../../components/Card'
import { EitaPorra } from './style'

import car1 from '../../assets/images/car_1.svg'
import { Heading, Paragraph } from '../../styles/typography'
import Button from '../../components/Button'

export const ProductFinal = () => {
  const [imageUrl, setImageUrl] = useState(car1)
  const [imageSmallUrl, setImageSmallUrl] = useState(car1)

  return (
    <EitaPorra>
      <main>
        {/* img car */}
        <div className="content-card-car">
          <img src={imageUrl} alt="car" />
          {!imageUrl && <p>Carregando imagem...</p>}
        </div>

        <div className="content-info-car"></div>

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
            Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
          </Heading>
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
          <div className="content-button">
            <Button variant="blue" buttonSize="b1pc">
              Comprar
            </Button>
          </div>
        </section>

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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Paragraph>
        </div>

        {/* mini-fotos  e cardUser*/}
        <aside className="">
          {/* mini-fotos */}
          <figure>
            <Heading
              fontWeight={600}
              level={3}
              size={'plus'}
              color={'grey1'}
              lineHeight={'25px'}
            >
              Fotos
            </Heading>
            <div className="content-small-photos-row1">
              <div className="content-small-img">
                <img src={imageSmallUrl} alt="car" />
              </div>
              <div className="content-small-img">
                <img src={imageSmallUrl} alt="car" />
              </div>
              <div className="content-small-img">
                <img src={imageSmallUrl} alt="car" />
              </div>
            </div>
            <div className="content-small-photos-row1">
              <div className="content-small-img">
                <img src={imageSmallUrl} alt="car" />
              </div>
              <div className="content-small-img">
                <img src={imageSmallUrl} alt="car" />
              </div>
              <div className="content-small-img">
                <img src={imageSmallUrl} alt="car" />
              </div>
            </div>
          </figure>

          {/* cardUser */}
          <article>
            <section className="content-card-user">
              <div className="content-initials">
                <span>SL</span>
              </div>
              <Heading
                fontWeight={600}
                level={3}
                size={'plus'}
                color={'grey1'}
                lineHeight={'25px'}
              >
                Samuel Leão
              </Heading>

              <Paragraph
                fontWeight={500}
                size={'normal'}
                color={'grey2'}
                lineHeight={'1.75rem'}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </Paragraph>
              <Button variant="grey0" buttonSize="g0pvta">
                Ver todos os anúncios
              </Button>
            </section>
          </article>

          <section className="content-comments">
            <article className='content-comment'>
              <Heading
                fontWeight={600}
                level={3}
                size={'plus'}
                color={'grey1'}
                lineHeight={'25px'}
              >
                Comentários
              </Heading>
              <div className="content-avatar">
                <div className="border-initials">
                  <span>MA</span>
                </div>
                <Paragraph
                  fontWeight={500}
                  size={'small'}
                  color={'grey1'}
                  lineHeight={'24px'}
                >
                  Marcos Antônio
                </Paragraph>
                <Paragraph
                  className="time-pass"
                  fontWeight={400}
                  size={'small'}
                  color={'grey3'}
                  lineHeight={'24px'}
                >
                  há 7 dias
                </Paragraph>
              </div>
              <Paragraph
                fontWeight={400}
                size={'small'}
                color={'grey2'}
                lineHeight={'24px'}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Paragraph>
            </article>
            <article className='content-comment'>
              <div className="content-avatar">
                <div className="border-initials">
                  <span>MA</span>
                </div>
                <Paragraph
                  fontWeight={500}
                  size={'small'}
                  color={'grey1'}
                  lineHeight={'24px'}
                >
                  Marcos Antônio
                </Paragraph>
                <Paragraph
                  className="time-pass"
                  fontWeight={400}
                  size={'small'}
                  color={'grey3'}
                  lineHeight={'24px'}
                >
                  há 7 dias
                </Paragraph>
              </div>
              <Paragraph
                fontWeight={400}
                size={'small'}
                color={'grey2'}
                lineHeight={'24px'}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Paragraph>
            </article>
            <article className='content-comment'>
              <div className="content-avatar">
                <div className="border-initials">
                  <span>MA</span>
                </div>
                <Paragraph
                  fontWeight={500}
                  size={'small'}
                  color={'grey1'}
                  lineHeight={'24px'}
                >
                  Marcos Antônio
                </Paragraph>
                <Paragraph
                  className="time-pass"
                  fontWeight={400}
                  size={'small'}
                  color={'grey3'}
                  lineHeight={'24px'}
                >
                  há 7 dias
                </Paragraph>
              </div>
              <Paragraph
                fontWeight={400}
                size={'small'}
                color={'grey2'}
                lineHeight={'24px'}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Paragraph>
            </article>
          </section>

          <article className='content-post'>
            <section className=''>

            </section>
          </article>
        </aside>
      </main>
    </EitaPorra>
  )
}


