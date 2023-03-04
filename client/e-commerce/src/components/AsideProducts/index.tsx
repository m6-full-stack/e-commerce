import { useContext } from 'react'
import car1 from '../../assets/images/car_1.svg'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { Heading } from '../../styles/typography'
import { AsideProductsStyle } from './style'

export const AsideProducts = () => {
  const { setIsModelPhoto } = useContext(ModalContext)
  return (
    <AsideProductsStyle>
      <div className="imagesContainer">
        <Heading className="titleImages">Fotos</Heading>
        <div className="imagesDivs">
          <img
            className="otherImages"
            src={car1}
            alt="Imagem do veículo clicado"
            onClick={() => {
              setIsModelPhoto(true)
            }}
      
          />
          <img
            className="otherImages"
            src={car1}
            alt="Imagem do veículo clicado"
            onClick={() => setIsModelPhoto(true)}
          />
          <img
            className="otherImages"
            src={car1}
            alt="Imagem do veículo clicado"
            onClick={() => setIsModelPhoto(true)}
          />
          <img
            className="otherImages"
            src={car1}
            alt="Imagem do veículo clicado"
            onClick={() => setIsModelPhoto(true)}
          />
          <img
            className="otherImages"
            src={car1}
            alt="Imagem do veículo clicado"
            onClick={() => setIsModelPhoto(true)}
          />
          <img
            className="otherImages"
            src={car1}
            alt="Imagem do veículo clicado"
            onClick={() => setIsModelPhoto(true)}
          />
        </div>
      </div>
      <div className="userContainer">
        <Heading size="large" className="userImage">
          SL
        </Heading>
        <Heading size={'normal'} className="userName" color={'grey1'}>
          Samuel Leão
        </Heading>
        <p className="descriptionUser description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry.
        </p>
        <button className="buttonSeeAll">Ver todos os anúncios</button>
      </div>
    </AsideProductsStyle>
  )
}
