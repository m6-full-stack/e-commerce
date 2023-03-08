import { useContext } from "react";

import { AnnouncementContext } from "../../contexts/AnnouncementProvider/AnnouncementProvide";
import { Heading } from "../../styles/typography";
import Button from "../Button";
import { SectionProductsStyle } from "./style";

export const SectionProducts = () => {
  const { announcementInfo } = useContext(AnnouncementContext);

  return (
    <SectionProductsStyle>
      <figure>
        <img src={announcementInfo.cover_image} className="principalImage" alt="IMAGEM 1" />
        <figcaption hidden> Imagem Principal </figcaption>
      </figure>
      <br />
      <div className="productInformation">
        <Heading fontWeight={600} className="productTitle" color={"grey1"}>
          {announcementInfo.title}
        </Heading>
        <div className="divYearPrice">
          <div className="divYear">
            <span className="spanPriceYear">{announcementInfo.year}</span>
            <span className="spanPriceYear">{`${announcementInfo.mileage}`}</span>
          </div>
          <div className="divPrice">
            <p>{`R$ ${announcementInfo.price}`}</p>
          </div>
        </div>
        <Button
          buttonSize="b1pc"
          onClick={() => {
            console.log("Comprei");
          }}
        >
          Comprar
        </Button>
      </div>
      <br />
      <div className="divDescriptionProduct description">
        <Heading className="titleDescription" level={4}>
          Descrição
        </Heading>
        <p className="descriptionProduct description">
          {announcementInfo.description}
        </p>
      </div>
    </SectionProductsStyle>
  );
};
