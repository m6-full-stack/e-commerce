import car1 from '../../../assets/images/car_1.svg'
import { HeaderProductsStyle } from './style'

export const HeaderProducts = () => {
  return (
    <HeaderProductsStyle className="headerMain">
      <section>
        <figure>
          <img src={car1} alt="IMAGEM 1" />
          <figcaption hidden> Imagem Principal </figcaption>
        </figure>
        <br />
        <div className="productInformation">
          <h3>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h3>
          <div className="sectionDivHeaderMain">
            <div className="divYear">
              <span>2013</span>
              <span>0 KM</span>
            </div>
            <div className="divPrice">
              <p>R$ 89.000,00</p>
            </div>
          </div>
          <button className="buy">Comprar</button>
        </div>
        <br />
        <div className="descriptionProduct">
          <h4>Descrição</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quos
            exercitationem placeat temporibus sunt, nemo magni consequuntur
            minus tempora reprehenderit. Consequuntur est ratione, quibusdam
            sequi sed officia pariatur?
          </p>
        </div>
      </section>
      <aside>
        <div className="imagesContainer">
          <h4 className="titleImages">Fotos</h4>
          <div className="imagesDivs">
            <img className="otherImages" src={car1} alt="" />
            <img className="otherImages" src={car1} alt="" />
            <img className="otherImages" src={car1} alt="" />
            <img className="otherImages" src={car1} alt="" />
            <img className="otherImages" src={car1} alt="" />
            <img className="otherImages" src={car1} alt="" />
          </div>
        </div>
        {/* <div className="userContainer">
          
        </div> */}
      </aside>
    </HeaderProductsStyle>
  )
}
