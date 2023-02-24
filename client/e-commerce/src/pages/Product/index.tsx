import { AsideProducts } from '../../components/AsideProducts'
import { CreateAnnouncementModal } from '../../components/CreateAnnouncementModal'
import { EditOrDeleteAnnouncementModal } from '../../components/EditOrDeleteAnnouncementModal'
import { FooterProducts } from '../../components/FooterProducts'
import { HeaderProductsStyle } from '../../components/HeaderProducts/style'
import { MainProducts } from '../../components/MainProducts'
import { ProductContainer } from '../../components/Products/style'
import { SectionProducts } from '../../components/SectionProducts'

export const Product = () => {
  return (
    <ProductContainer>
      <div>
        {/* <CreateAnnouncementModal /> */}
        <EditOrDeleteAnnouncementModal />
        <div className="divBlue"></div>
        <HeaderProductsStyle>
          <SectionProducts />
          <AsideProducts />
        </HeaderProductsStyle>
        <MainProducts />
        <FooterProducts />
      </div>
    </ProductContainer>
  )
}
