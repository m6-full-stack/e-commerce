import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/ModalProvider/ModalProvider";
import { UserContext } from "../../contexts/UserProvider/UserProvider";
import { IUser, UserRequest } from "../../interfaces/LoginInterface";
import { Heading, Paragraph } from "../../styles/typography";
import Button from "../Button";
import { CardContainer } from "./style";

interface adCardProps {
  isAdmin: Boolean;
  userId?: string;
}

export const CreateAdCard = ({ isAdmin, userId }: adCardProps) => {
  const { setIsModelCreate } = useContext(ModalContext);
  const { getUserProfile, getProfile } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState<UserRequest>({} as UserRequest);

  useEffect(() => {
    userId
      ? getUserProfile(userId)
          .then(res => setUserInfo(res))
          .catch(err => console.log(err))
      : getProfile()
          .then(res => setUserInfo(res))
          .catch(err => console.log(err));
  }, []);

  return (
    <CardContainer>
      <div className="content">
        <div className="content-title">
          <div className="border">
            <Paragraph
              color="whiteFixed"
              size="xlarge"
              fontWeight={500}
              lineHeight={"52.94px"}
            >
              {userInfo.name && userInfo.name.substring(0, 2).toUpperCase()}
            </Paragraph>
          </div>

          <div className="content-name">
            <Heading
              size="plus"
              fontWeight={600}
              lineHeight={"25px"}
              level={3}
              color={"grey1"}
            >
              {userInfo?.name}
            </Heading>
            <div className="content-advertiser">
              <Paragraph
                color="brand1"
                size="small"
                fontWeight={500}
                lineHeight={"24px"}
              >
                Anunciante
              </Paragraph>
            </div>
          </div>

          <Paragraph
            color="grey2"
            size="normal"
            fontWeight={400}
            lineHeight={"28px"}
          >
            {userInfo?.description}
          </Paragraph>
        </div>
        {isAdmin && (
          <Button
            variant="transparent"
            buttonSize="tprofca"
            onClick={() => setIsModelCreate(true)}
          >
            Criar Anuncio
          </Button>
        )}
      </div>
    </CardContainer>
  );
};
