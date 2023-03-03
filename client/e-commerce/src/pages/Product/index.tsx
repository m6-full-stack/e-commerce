import { useContext, useEffect, useState } from "react";
import { AsideProducts } from "../../components/AsideProducts";
import { CreateAnnouncementModal } from "../../components/CreateAnnouncementModal";
import { EditOrDeleteAnnouncementModal } from "../../components/EditOrDeleteAnnouncementModal";
import { FooterProducts } from "../../components/FooterProducts";
import { HeaderProductsStyle } from "../../components/HeaderProducts/style";
import { MainProducts } from "../../components/MainProducts";

import { ProductContainer } from "../../components/Products/style";
import { SectionProducts } from "../../components/SectionProducts";
import { AnnouncementContext } from "../../contexts/AnnouncementProvider/AnnouncementProvide";

export const Product = () => {
  const [currentModal, setCurrentModal] = useState(true);
  const { getRetriveAnnouncement } = useContext(AnnouncementContext);

  useEffect(() => {
    getRetriveAnnouncement("c9953fe0-5728-41a7-a0f7-8abfdddf625b");
  }, []);

  return (
    <ProductContainer>
      <div>
        {/* <CreateAnnouncementModal /> */}
        {/* <EditOrDeleteAnnouncementModal /> */}

        <div className="divBlue"></div>
        <HeaderProductsStyle>
          <SectionProducts />
          <AsideProducts />
        </HeaderProductsStyle>
        <MainProducts />
        <FooterProducts />
      </div>
    </ProductContainer>
  );
};
