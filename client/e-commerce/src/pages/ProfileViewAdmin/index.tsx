import React from 'react'
import { AuctionCard } from '../../components/AuctionCard'
import { Card } from '../../components/Card'
import { CreateAdCard } from '../../components/CreateAdCard'

import { ProfileContainer } from './style'

export const ProfileViewAdm = () => {
  return (
    <ProfileContainer>
      <section className="teste">
        <div className="blue"></div>
        <div className="content">
          <CreateAdCard />
          <AuctionCard />
        </div>
      </section>
    </ProfileContainer>
  )
}
