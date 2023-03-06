import { Heading } from '../../styles/typography'
import { InputText, UserCommentInputFinal } from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationUserComment } from '../../validators/validationUserComment'
import Button from '../Button'
import { useContext } from 'react'
import {
  CommentContext,
  CommentData,
} from '../../contexts/CommentProvider/CommentProvider'
import { AvatarUser } from '../AvatarUser'

export const ActualUserCommentFinal = () => {
  const { createComment } = useContext(CommentContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentData>({
    resolver: yupResolver(validationUserComment),
  })

  const onSubmit = (data: CommentData) => {
    console.log('teste')
    createComment(data, 'c9953fe0-5728-41a7-a0f7-8abfdddf625b')
  }

  // return (
  //   <UserCommentInput>
  //     <div className="divCommentContainer">
  //       <div className="divTopComments">
  //         <Heading size="small" className="userCommentsImage">
  //           SL
  //         </Heading>
  //         <Heading className="userCommentsName" color={"grey1"}>
  //           Samuel Leão
  //         </Heading>
  //       </div>
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //         <InputText
  //           placeholder="Escreva aqui seu comentário!"
  //           {...register("content")}
  //         />
  //         <p className="errors">{errors.content?.message?.toString()}</p>
  //         <Button variant="blue" buttonSize="b1pcom" type="submit">
  //           Comentar
  //         </Button>
  //       </form>
  //     </div>
  //   </UserCommentInput>
  // );

  return (
    <UserCommentInputFinal>
      <article className="content-post">
        <form className="content-form">
          <AvatarUser />

          <div className="content-text-area">
            <InputText
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              {...register('content')}
            />

            <p className="errors">{errors.content?.message?.toString()}</p>
            <Button
              className="button-rel"
              variant="blue"
              buttonSize="b1pcom"
              type="submit"
            >
              Comentar
            </Button>
          </div>
          <div className="container-buttons">
            <div className="content-buttons">
              <div className="content-button-1">
                <Button variant="grey7" buttonSize="g7proem">
                  Gostei muito!
                </Button>
              </div>
              <div className="content-button-2">
                <Button variant="grey7" buttonSize="g7proem">
                  Incrível
                </Button>
              </div>
            </div>
            <div className="content-button">
              <Button variant="grey7" buttonSize="g7proem">
                Recomendarei para meus amigos!
              </Button>
            </div>
          </div>
        </form>
      </article>
    </UserCommentInputFinal>
  )
}
