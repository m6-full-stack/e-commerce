import { useContext, useState } from 'react'
import car1 from '../../assets/images/car_1.svg'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { Heading, Paragraph } from '../../styles/typography'
import Button from '../../components/Button'
import { AsideProductsStyleFinal } from './style'

export const AsideProductsFinal = () => {
  const { setIsModelPhoto } = useContext(ModalContext)
  const [imageSmallUrl, setImageSmallUrl] = useState(car1)

  return (
    <AsideProductsStyleFinal>
      <aside >
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
              <img
                src={imageSmallUrl}
                alt="car"
                onClick={() => {
                  setIsModelPhoto(true)
                }}
              />
            </div>
            <div className="content-small-img">
              <img
                src={imageSmallUrl}
                alt="car"
                onClick={() => {
                  setIsModelPhoto(true)
                }}
              />
            </div>
            <div className="content-small-img">
              <img
                src={imageSmallUrl}
                alt="car"
                onClick={() => {
                  setIsModelPhoto(true)
                }}
              />
            </div>
          </div>
          <div className="content-small-photos-row1">
            <div className="content-small-img">
              <img
                src={imageSmallUrl}
                alt="car"
                onClick={() => {
                  setIsModelPhoto(true)
                }}
              />
            </div>
            <div className="content-small-img">
              <img
                src={imageSmallUrl}
                alt="car"
                onClick={() => {
                  setIsModelPhoto(true)
                }}
              />
            </div>
            <div className="content-small-img">
              <img
                src={imageSmallUrl}
                alt="car"
                onClick={() => {
                  setIsModelPhoto(true)
                }}
              />
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
      </aside>
    </AsideProductsStyleFinal>
  )
}
