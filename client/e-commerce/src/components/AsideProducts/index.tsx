import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementProvider/AnnouncementProvide";
import { Heading } from "../../styles/typography";
import { AsideProductsStyle } from "./style";

export const AsideProducts = () => {
  const { announcementInfo } = useContext(AnnouncementContext);

  return (
    <AsideProductsStyle>
      <div className="imagesContainer">
        <Heading className="titleImages">Fotos</Heading>
        <div className="imagesDivs">
          {announcementInfo.images_list &&
            announcementInfo.images_list.map((elem, index) => {
              if (index < 7) {
                return (
                  <img
                    className="otherImages"
                    src={elem.image_url}
                    alt=""
                    key={elem.id}
                  />
                );
              }
            })}
        </div>
      </div>
      <div className="userContainer">
        <Heading size="large" className="userImage">
          {announcementInfo.advertiser && announcementInfo.advertiser.name[0]}
        </Heading>
        <Heading size={"normal"} className="userName" color={"grey1"}>
          {announcementInfo.advertiser && announcementInfo.advertiser.name}
        </Heading>
        <p className="descriptionUser description">
          {announcementInfo.advertiser &&
            announcementInfo.advertiser.description}
        </p>
        <button className="buttonSeeAll">Ver todos os anúncios</button>
      </div>
    </AsideProductsStyle>
  );
};
