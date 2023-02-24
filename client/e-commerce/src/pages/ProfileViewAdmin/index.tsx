import React from 'react'
import { AuctionCard } from '../../components/AuctionCard'

import { CreateAdCard } from '../../components/CreateAdCard'
import { Heading } from '../../styles/typography'

import { ProfileContainer } from './style'

export const ProfileViewAdm = () => {
  return (
    <ProfileContainer>
      <div className="blue"></div>

      <div className="content">
        <CreateAdCard />
        <Heading
          className="title"
          level={2}
          fontWeight={600}
          size={'plus'}
          color={'black'}
          lineHeight={'30px'}
        >
          Leilão
        </Heading>
        <div className="content-auctionCard">
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
        </div>
      </div>
    </ProfileContainer>
  )
}
