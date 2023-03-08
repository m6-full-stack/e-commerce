import { ContainerHome } from './style'
import { Card } from '../../components/Card'
import { Heading, Paragraph } from '../../styles/typography'
import { useContext, useEffect, useState } from 'react'
import { AuctionCard } from '../../components/AuctionCard'
import { ProductsContext } from '../../contexts/ProductsProvider/ProductsProvider'
import { AnnouncementDataResponse } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { ModalLoginNecessary } from '../../components/ModalLoginNecessary'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'

export const Home = () => {
  const { isModalLoginNecessary } = useContext(ModalContext)

  const { auctionsList, carsList, motosList, actListsVehicles, setActualPage } =
    useContext<any>(ProductsContext)

  useEffect(() => {
    actListsVehicles()
    setActualPage('home')
  }, [])

  return (
    <>
      {isModalLoginNecessary ? <ModalLoginNecessary /> : <></>}
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
            <div className='content-carrossel'>
              {auctionsList?.length > 0 ? (
                auctionsList?.map(
                  (elem: AnnouncementDataResponse, ind: number) => (
                    <AuctionCard key={ind} vehicle={elem} />
                  )
                )
              ) : (
                <Paragraph
                  fontWeight={400}
                  size={'plus'}
                  color={'grey0'}
                  lineHeight={'25px'}
                >
                  Nenhum leilão cadastrado!
                </Paragraph>
              )}
            </div>
          </div>
          <div id='car' className='list-car'>
            <h1>Carros</h1>
            <div className='carrossel'>
              {carsList?.length > 0 ? (
                carsList?.map((elem: AnnouncementDataResponse, ind: number) => (
                  <Card key={ind} vehicle={elem} />
                ))
              ) : (
                <Paragraph
                  fontWeight={400}
                  size={'plus'}
                  color={'grey0'}
                  lineHeight={'25px'}
                >
                  Nenhum Carro à venda!
                </Paragraph>
              )}
            </div>
          </div>
          <div id='motorcycle' className='list-motorcycle'>
            <h1>Motos</h1>
            <div className='carrossel'>
              {motosList?.length > 0 ? (
                motosList?.map(
                  (elem: AnnouncementDataResponse, ind: number) => (
                    <Card key={ind} vehicle={elem} />
                  )
                )
              ) : (
                <Paragraph
                  fontWeight={400}
                  size={'plus'}
                  color={'grey0'}
                  lineHeight={'25px'}
                >
                  Nenhuma Moto à venda!
                </Paragraph>
              )}
            </div>
          </div>
        </div>
      </ContainerHome>
    </>
  )
}
