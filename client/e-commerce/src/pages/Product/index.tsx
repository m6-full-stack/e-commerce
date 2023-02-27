import { useState } from 'react'
import { AsideProducts } from '../../components/AsideProducts'
import { CreateAnnouncementModal } from '../../components/CreateAnnouncementModal'
import { EditOrDeleteAnnouncementModal } from '../../components/EditOrDeleteAnnouncementModal'
import { FooterProducts } from '../../components/FooterProducts'
import { HeaderProductsStyle } from '../../components/HeaderProducts/style'
import { MainProducts } from '../../components/MainProducts'
import { Modal } from '../../components/Modal'
import { ProductContainer } from '../../components/Products/style'
import { SectionProducts } from '../../components/SectionProducts'

export const Product = () => {
  const [currentModal, setCurrentModal] = useState(true)
  return (
    <ProductContainer>
      {currentModal ? (
        <Modal />
      ) : (
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
      )}
    </ProductContainer>
  )
}
