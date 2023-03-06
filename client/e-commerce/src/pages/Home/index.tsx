import { ContainerHome } from './style'
import { Card } from '../../components/Card'
import { useContext, useEffect } from 'react'
import { AuctionCard } from '../../components/AuctionCard'
import { ProductsContext } from '../../contexts/ProductsProvider/ProductsProvider'
import { AnnouncementData } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { Heading } from '../../styles/typography'

export const Home = () => {

  const { auctionsList, carsList, motosList, actListsVehicles } = useContext<any>(ProductsContext)

  useEffect(() => {
    actListsVehicles();
    }, []);
  
  return (
    <ContainerHome>
      <div className='select-announcement'>
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <h3>Um ambiente feito para você explorar o seu melhor</h3>

        <div className='select-buttons'>
          <a href='#car' className='button-car'>
            Carros
          </a>
          <a href='#motorcycle' className='button-motorcycle'>
            Motos
          </a>
        </div>
      </div>
      <div className='announcements'>
      <div className='list-auction'>  
        <h1>Leilão</h1>
        <div className="content-carrossel">
          {auctionsList?.length > 0 ? (
            auctionsList?.map((elem: AnnouncementData, ind: number) => (
              <AuctionCard 
                key={ind}
                vehicle={elem}
              />
            )))
            :
            (
              <Heading
              level={1}
              fontWeight={400}
              size={'plus'}
              color={'grey0'}
              lineHeight={'25px'}
            >
              Nenhum leilão cadastrado!
            </Heading>
            )}
        </div>
      </div>
        <div id='car' className='list-car'>
          <h1>Carros</h1>
          <div className='carrossel'>
            {carsList?.length > 0 ? (
              carsList?.map((elem: AnnouncementData, ind: number)=> (
                <Card 
                  key={ind}
                  vehicle={elem}
                />
              ))
            )
            :
            (
              <Heading
              level={1}
              fontWeight={400}
              size={'plus'}
              color={'grey0'}
              lineHeight={'25px'}
            >
              Nenhum Carro à venda!
            </Heading>
            )}
          </div>
        </div>
        <div id='motorcycle' className='list-motorcycle'>
          <h1>Motos</h1>
          <div className='carrossel'>
          {motosList?.length > 0 ? (
              motosList?.map((elem: AnnouncementData, ind: number)=> (
                <Card 
                  key={ind}
                  vehicle={elem}
                />
              ))
            )
            :
            (
              <Heading
              level={1}
              fontWeight={400}
              size={'plus'}
              color={'grey0'}
              lineHeight={'25px'}
            >
              Nenhuma Moto à venda!
            </Heading>
            )}
          </div>
        </div>
      </div>
    </ContainerHome>
  )
}
