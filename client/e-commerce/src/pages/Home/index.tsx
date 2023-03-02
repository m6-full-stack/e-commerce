import { ContainerHome } from './style'
import { Card } from '../../components/Card'
import { useState } from 'react'

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
        <div id='car' className='list-car'>
          <h1>Carros</h1>
          <div className='carrossel'>
            <Card name='Teste 1' />

            <Card name='Teste 2' />

            <Card name='Teste 3' />

            <Card name='Teste 1' />

            <Card name='Teste 2' />

            <Card name='Teste 3' />
          </div>
        </div>
        <div id='motorcycle' className='list-motorcycle'>
          <h1>Motos</h1>
          <div className='carrossel'>
            <Card name='Teste 1' />

            <Card name='Teste 2' />

            <Card name='Teste 3' />

            <Card name='Teste 1' />

            <Card name='Teste 2' />

            <Card name='Teste 3' />
          </div>
        </div>
      </div>
    </ContainerHome>
  )
}
