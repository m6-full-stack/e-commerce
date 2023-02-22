import { Heading } from '../../../styles/typography'
import { MainProductsStyle } from './style'

export const MainProducts = () => {
  return (
    <MainProductsStyle className="mainMain">
      <div className="divCommentsProduct">
        <Heading level={4}>Comentários</Heading>
        <div className="userCommentsContainer">
          <Heading size="small" className="userCommentsImage">
            SL
          </Heading>
          <Heading size={'normal'} className="userCommentsName" color={'grey1'}>
            Samuel Leão
          </Heading>
          <li className="description">há 3 dias</li>
          <p className="descriptionCommentsUser description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </MainProductsStyle>
  )
}
