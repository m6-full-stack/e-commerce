import React from "react";
import { Heading, Paragraph } from "../../styles/typography";
import Button from "../Button";
import { CardContainer } from "./style";

interface adCardProps {
  isAdmin: Boolean;
}

export const CreateAdCard = ({ isAdmin }: adCardProps) => {
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
              SL
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
              Samuel Leão
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Paragraph>
        </div>
        {isAdmin && (
          <Button variant="transparent" buttonSize="tprofca">
            Criar Anuncio
          </Button>
        )}
      </div>
    </CardContainer>
  );
};
