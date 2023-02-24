import React from "react";
import { AuctionCard } from "../../components/AuctionCard";

import { CardAdm } from "../../components/Card/CardAdm";

import { CreateAdCard } from "../../components/CreateAdCard";
import { Heading } from "../../styles/typography";

import { ProfileContainer } from "./style";

export const ProfileViewAdm = () => {
  return (
    <ProfileContainer>
      <div className="blue"></div>

      <div className="content">
        <CreateAdCard isAdmin={true} />
        <Heading
          className="title"
          level={2}
          fontWeight={600}
          size={"plus"}
          color={"black"}
          lineHeight={"30px"}
        >
          Leilão
        </Heading>

        <div className="content-carousel">
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
        </div>
        <Heading
          className="title-car-motorbike"
          level={2}
          fontWeight={600}
          size={"plus"}
          color={"black"}
          lineHeight={"30px"}
        >
          Carros
        </Heading>

        <div className="content-carousel">
          <CardAdm />
          <CardAdm />
          <CardAdm />
          <CardAdm />
          <CardAdm />
        </div>
        <Heading
          className="title-car-motorbike"
          level={2}
          fontWeight={600}
          size={"plus"}
          color={"black"}
          lineHeight={"30px"}
        >
          Motos
        </Heading>
        <div className="content-carousel">
          <CardAdm />
          <CardAdm />
          <CardAdm />
          <CardAdm />
          <CardAdm />
        </div>
      </div>
    </ProfileContainer>
  );
};
