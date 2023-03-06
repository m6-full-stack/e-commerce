import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { CreateAdCard } from "../../components/CreateAdCard";
import { UserContext } from "../../contexts/UserProvider/UserProvider";
import { UserRequest } from "../../interfaces/LoginInterface";
import { Heading } from "../../styles/typography";

import { ProfileContainer } from "./style";

export const ProfileViewUser = () => {
  const { getUserProfile } = useContext(UserContext);
  const [profileInfo, setProfileInfo] = useState<UserRequest>(
    {} as UserRequest
  );
  const { id } = useParams();

  useEffect(() => {
    id && getUserProfile(id).then(res => setProfileInfo(res));
  }, []);

  return (
    <ProfileContainer>
      <div className="blue"></div>
      <div className="content">
        <CreateAdCard isAdmin={false} />
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
          <Card isProfileView={false} />
          <Card isProfileView={false} />
          <Card isProfileView={false} />
          <Card isProfileView={true} />
          <Card isProfileView={true} />
          <Card isProfileView={true} />
          <Card isProfileView={true} />
          <Card isProfileView={true} />
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
          <Card />
          <Card isProfileView={true} />
          <Card isProfileView={true} />
          <Card isProfileView={true} />
          <Card isProfileView={true} />
          <Card isProfileView={true} />
          <Card isProfileView={true} />
          <Card isProfileView={true} />
          <Card isProfileView={true} />
        </div>
      </div>
    </ProfileContainer>
  );
};
