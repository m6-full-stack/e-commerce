import { FooterProductsStyle } from './style'
import { ActualUserComment } from '../../components/ActualUserComment'

export const FooterProducts = () => {
  return (
    <FooterProductsStyle className="content">
      <div className="divCommentsProduct">
        <ActualUserComment />
      </div>
    </FooterProductsStyle>
  )
}
