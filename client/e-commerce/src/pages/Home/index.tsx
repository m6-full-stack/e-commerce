import { ContainerHome } from './style'
import { Card } from '../../components/Card'
import { useState } from 'react'
import { CreateAdCard } from '../../components/CreateAdCard'
import { Heading } from '../../styles/typography'
import { AuctionCard } from '../../components/AuctionCard'

export const Home = () => {
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
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
        </div>
      </div>
        <div id='car' className='list-car'>
          <h1>Carros</h1>
          <div className='carrossel'>
            <Card />

            <Card />

            <Card />

            <Card />

            <Card />

            <Card />
          </div>
        </div>
        <div id='motorcycle' className='list-motorcycle'>
          <h1>Motos</h1>
          <div className='carrossel'>
          <Card />

          <Card />

          <Card />
          
          <Card />

          <Card />

          <Card />

          </div>
        </div>
      </div>
    </ContainerHome>
  )
}
