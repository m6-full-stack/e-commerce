import React, { useContext, useEffect, useState } from "react";
import { AuctionCard } from "../../components/AuctionCard";

import { CardAdm } from "../../components/Card/CardAdm";

import { CreateAdCard } from "../../components/CreateAdCard";
import { AnnouncementContext } from "../../contexts/AnnouncementProvider/AnnouncementProvide";
import { UserContext } from "../../contexts/UserProvider/UserProvider";

import { Heading } from "../../styles/typography";

import { ProfileContainer } from "./style";

export const ProfileViewAdm = () => {
  const { user, setUser, getProfile } = useContext(UserContext);
  const { announcementData, setAnnouncementData } =
    useContext(AnnouncementContext);
  const [haveAnnouncementAuction, setHaveAnnouncementAuction] = useState(false);
  const [haveAnnouncmentCarSale, setHaveAnnouncmentCarSale] = useState(false);
  const [haveAnnouncmentMotorcycleSale, setHaveAnnouncmentMotorcycleSale] =
    useState(false);

  useEffect(() => {
    getProfile()
      .then(user => {
        setUser(user);
        setAnnouncementData(user.announcements);
        user.announcements.forEach(announcement => {
          if (announcement.type === "leilão") {
            setHaveAnnouncementAuction(true);
          }
          if (announcement.type === "venda") {
            if (announcement.vehicle_type === "carro") {
              setHaveAnnouncmentCarSale(true);
            }
            if (announcement.vehicle_type === "moto") {
              setHaveAnnouncmentMotorcycleSale(true);
            }
          }
        });
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <ProfileContainer>
      <div className="blue"></div>

      <div className="content">
        <CreateAdCard
          isAdmin={user?.is_seller === true ? true : false}
        />

        {announcementData !== null ? (
          <>
            <Heading
              className="title-car-motorbike"
              level={2}
              fontWeight={600}
              size={"plus"}
              color={"black"}
              lineHeight={"30px"}
            >
              Leilão
            </Heading>
            <div className="content-carousel">
              {haveAnnouncementAuction ? (
                announcementData?.map(announcement => {
                  if (announcement.type === "leilão") {
                    return (
                      <CardAdm
                        announcement={announcement}
                        username={user!.name}
                      />
                    );
                  }
                })
              ) : (
                <Heading
                  className="no-ads"
                  level={2}
                  fontWeight={600}
                  size={"plus"}
                  color={"black"}
                  lineHeight={"30px"}
                >
                  Sem anúncios por aqui...
                </Heading>
              )}
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
              {haveAnnouncmentCarSale ? (
                announcementData?.map(announcement => {
                  if (announcement.type === "venda") {
                    if (announcement.vehicle_type === "carro") {
                      return (
                        <CardAdm
                          announcement={announcement}
                          username={user!.name}
                        />
                      );
                    }
                  }
                })
              ) : (
                <Heading
                  className="no-ads"
                  level={2}
                  fontWeight={600}
                  size={"plus"}
                  color={"black"}
                  lineHeight={"30px"}
                >
                  Sem anúncios por aqui...
                </Heading>
              )}
            </div>
            <Heading
              className="title-car-motorbike "
              level={2}
              fontWeight={600}
              size={"plus"}
              color={"black"}
              lineHeight={"30px"}
            >
              Motos
            </Heading>
            <div className="content-carousel">
              {haveAnnouncmentMotorcycleSale ? (
                announcementData?.map(announcement => {
                  if (announcement.type === "venda") {
                    if (announcement.vehicle_type === "moto") {
                      return (
                        <CardAdm
                          announcement={announcement}
                          username={user!.name}
                        />
                      );
                    }
                  }
                })
              ) : (
                <Heading
                  className="no-ads"
                  level={2}
                  fontWeight={600}
                  size={"plus"}
                  color={"black"}
                  lineHeight={"30px"}
                >
                  Sem anúncios por aqui...
                </Heading>
              )}
            </div>
          </>
        ) : (
          <>
            <Heading
              className="no-ads"
              level={2}
              fontWeight={600}
              size={"plus"}
              color={"black"}
              lineHeight={"30px"}
            >
              Sem anúncios por aqui...
            </Heading>
          </>
        )}
      </div>
    </ProfileContainer>
  );
};
