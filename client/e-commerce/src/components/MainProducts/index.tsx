import { Heading } from '../../styles/typography'
import { MainProductsStyle } from './style'
import { CommentsCards } from '../CommentCards'

export const MainProducts = () => {
  return (
    <MainProductsStyle>
      <div className="divCommentsProduct">
        <Heading className="titleComments" level={4}>
          Comentários
        </Heading>
        <CommentsCards />
      </div>
    </MainProductsStyle>
  )
}
