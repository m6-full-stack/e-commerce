import car1 from '../../../assets/images/car_1.svg'
import { Heading } from '../../../styles/typography'
import Button from '../../Button'
import { HeaderProductsStyle } from './style'

export const HeaderProducts = () => {
  return (
    <HeaderProductsStyle className="headerMain">
      <section>
        <figure>
          <img src={car1} className="principalImage" alt="IMAGEM 1" />
          <figcaption hidden> Imagem Principal </figcaption>
        </figure>
        <br />
        <div className="productInformation">
          <Heading fontWeight={600} className="productTitle" color={'grey1'}>
            Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{' '}
          </Heading>
          <div className="divYearPrice">
            <div className="divYear">
              <span className="spanPriceYear">2013</span>
              <span className="spanPriceYear">0 KM</span>
            </div>
            <div className="divPrice">
              <p>R$ 89.000,00</p>
            </div>
          </div>
          <Button buttonSize="b1pc">Comprar</Button>
        </div>
        <br />
        <div className="divDescriptionProduct description">
          <Heading level={4}>Descrição</Heading>
          <p className="descriptionProduct description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
      <aside>
        <div className="imagesContainer">
          <Heading className="titleImages">Fotos</Heading>
          <div className="imagesDivs">
            <img className="otherImages" src={car1} alt="" />
            <img className="otherImages" src={car1} alt="" />
            <img className="otherImages" src={car1} alt="" />
            <img className="otherImages" src={car1} alt="" />
            <img className="otherImages" src={car1} alt="" />
            <img className="otherImages" src={car1} alt="" />
          </div>
        </div>
        <div className="userContainer">
          <Heading size="large" className="userImage">
            SL
          </Heading>
          <Heading size={'normal'} className="userName" color={'grey1'}>
            {' '}
            Samuel Leão{' '}
          </Heading>
          <p className="descriptionUser description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
          <button className="buttonSeeAll">Ver todos os anúncios</button>
        </div>
      </aside>
    </HeaderProductsStyle>
  )
}
