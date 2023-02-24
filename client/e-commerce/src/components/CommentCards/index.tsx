import { Heading } from '../../styles/typography'
import { UserCommentCard } from './styles'

export const CommentsCards = () => {
  return (
    <UserCommentCard>
      <div className="divCommentContainer">
        <div className="divTopComments">
          <Heading size="small" className="userCommentsImage">
            JL
          </Heading>
          <Heading className="userCommentsName" color={'grey1'}>
            Júlia Lima
          </Heading>
          <li className="description dateComments">há 3 dias</li>
        </div>
        <p className="descriptionCommentsUser description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <div className="divTopComments">
          <Heading size="small" className="userCommentsImage1">
            MA
          </Heading>
          <Heading className="userCommentsName" color={'grey1'}>
            Marcos Antônio
          </Heading>
          <li className="description dateComments">há 11 dias</li>
        </div>
        <p className="descriptionCommentsUser description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <div className="divTopComments">
          <Heading size="small" className="userCommentsImage2">
            CS
          </Heading>
          <Heading className="userCommentsName" color={'grey1'}>
            Camila Silva
          </Heading>
          <li className="description dateComments">há 1 mês</li>
        </div>
        <p className="descriptionCommentsUser description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </UserCommentCard>
  )
}
