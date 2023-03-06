import { useContext, useState } from 'react'
import car1 from '../../assets/images/car_1.svg'
import { AnnouncementContext } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { Heading, Paragraph } from '../../styles/typography'
import Button from '../Button'
import { SectionProductsFinalStyle } from './style'

export const SectionProductsFinal = () => {
  const { announcementInfo } = useContext(AnnouncementContext)
  const [imageUrl, setImageUrl] = useState(car1)
  const [imageSmallUrl, setImageSmallUrl] = useState(car1)

  return (
    <SectionProductsFinalStyle>
      {/* img car */}
      <figure className="content-card-car">
        <img src={imageUrl} alt="car" />
        {!imageUrl && <p>Carregando imagem...</p>}
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Paragraph>
      </div>
    </SectionProductsFinalStyle>
  )
}
