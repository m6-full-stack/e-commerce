import React from 'react'
import { AuctionCardContainer } from './style'
import carAuction from '../../assets/car-auction.svg'
import Button from '../Button'

export const AuctionCard = () => {
  return (
    <AuctionCardContainer>
      <div className="content-auction">
        <div className="content-auction--content">
          <img src={carAuction} alt="" />
        </div>
        <footer className="content-auction-button">
          <Button variant="transparent" buttonSize="tprofesm">
            Editar
          </Button>
          <Button variant="transparent" buttonSize="tprofvcsm">
            Ver como
          </Button>
        </footer>
      </div>
    </AuctionCardContainer>
  )
}
