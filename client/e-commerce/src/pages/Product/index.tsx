import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AsideProducts } from "../../components/AsideProducts";
import { FooterProducts } from "../../components/FooterProducts";
import { HeaderProductsStyle } from "../../components/HeaderProducts/style";
import { MainProducts } from "../../components/MainProducts";
import { ProductContainer } from "../../components/Products/style";
import { SectionProducts } from "../../components/SectionProducts";
import { AnnouncementContext } from "../../contexts/AnnouncementProvider/AnnouncementProvide";

export const Product = () => {
  const { getRetriveAnnouncement } = useContext(AnnouncementContext);
  const { id } = useParams();
  
  useEffect(() => {
    id && getRetriveAnnouncement(id);
  }, []);

  return (
    <ProductContainer>
      <div>
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
