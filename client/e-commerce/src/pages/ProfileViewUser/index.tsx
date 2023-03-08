import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { CreateAdCard } from "../../components/CreateAdCard";
import { UserContext } from "../../contexts/UserProvider/UserProvider";
import { UserRequest } from "../../interfaces/LoginInterface";
import { Heading } from "../../styles/typography";

import { ProfileContainer } from "./style";

export const ProfileViewUser = () => {
  const { id } = useParams();
  const { getUserProfile } = useContext(UserContext);
  const [isCarExists, setIsCarExists] = useState(false);
  const [isMotoExists, setIsMotoExists] = useState(false);
  const [profileInfo, setProfileInfo] = useState<UserRequest>(
    {} as UserRequest
  );

  useEffect(() => {
    id &&
      getUserProfile(id)
        .then(res => {
          res.announcements.forEach(elem => {
            console.log(elem);
            if (elem.vehicle_type.toLowerCase() === "carro") {
              setIsCarExists(true);
            }
            if (elem.vehicle_type.toLowerCase() === "moto") {
              setIsMotoExists(true);
            }
          });
          setProfileInfo(res);
        })
        .catch(err => console.log(err));
  }, []);

  return (
    <ProfileContainer>
      <div className="blue"></div>
      <div className="content">
        <CreateAdCard isAdmin={false} userId={id} />
        <Heading
          className="title"
          level={2}
          fontWeight={600}
          size={"plus"}
          color={"black"}
          lineHeight={"30px"}
        >
          Carros
        </Heading>
        <div className="carousel">
          {!isCarExists ? (
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
          ) : (
            profileInfo.announcements &&
            profileInfo.announcements.map(
              elem =>
                elem.vehicle_type.toLowerCase() === "carro" && (
                  <Card isProfileView={true} vehicle={elem} />
                )
            )
          )}
        </div>

        <Heading
          className="title"
          level={2}
          fontWeight={600}
          size={"plus"}
          color={"black"}
          lineHeight={"30px"}
        >
          Motos
        </Heading>
        <div className="carousel">
          {!isMotoExists ? (
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
          ) : (
            profileInfo.announcements &&
            profileInfo.announcements.map(
              elem =>
                elem.vehicle_type.toLowerCase() === "moto" && (
                  <Card isProfileView={true} vehicle={elem} />
                )
            )
          )}
        </div>
      </div>
    </ProfileContainer>
  );
};
