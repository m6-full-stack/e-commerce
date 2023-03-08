import { Heading } from '../../styles/typography'
import { InputText, UserCommentInputFinal } from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationUserComment } from '../../validators/validationUserComment'
import Button from '../Button'
import { useContext, useEffect, useState } from 'react'
import {
  CommentContext,
  CommentData,
} from '../../contexts/CommentProvider/CommentProvider'
import { AvatarUser } from '../AvatarUser'
import { UserRequest } from '../../interfaces/LoginInterface'
import { UserContext } from '../../contexts/UserProvider/UserProvider'
import { useParams } from 'react-router-dom'

export const ActualUserCommentFinal = () => {
  const { createComment } = useContext(CommentContext)
  const { getProfile } = useContext(UserContext)

  const [infoUserComment, setInfoUserComment] = useState<UserRequest>(
    {} as UserRequest
  )
  const { id } = useParams()

  useEffect(() => {
    getProfile().then((res) => setInfoUserComment(res))
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentData>({
    resolver: yupResolver(validationUserComment),
  })

  const onSubmit = (data: CommentData) => {
    id && createComment(data, id)
  }

  return (
    <UserCommentInputFinal>
      <article className="content-post">
        <form className="content-form" onSubmit={handleSubmit(onSubmit)}>
          <AvatarUser />

          <div className='content-text-area'>
            <InputText
              placeholder='Carro muito confortável, foi uma ótima experiência de compra...'
              {...register('content')}
            />

            <p className='errors'>{errors.content?.message?.toString()}</p>
          </div>
          <Button
            className='button-rel'
            variant='blue'
            buttonSize='b1pcom'
            type='submit'
          >
            Comentar
          </Button>
          <div className='container-buttons'>
            <div className='content-buttons'>
              <div className='content-button-1'>
                <Button variant='grey7' buttonSize='g7proem'>
                  Gostei muito!
                </Button>
              </div>
              <div className='content-button-2'>
                <Button variant='grey7' buttonSize='g7proem'>
                  Incrível
                </Button>
              </div>
            </div>
            <div className='content-button3'>
              <Button variant='grey7' buttonSize='g7proem2'>
                Recomendarei para meus amigos!
              </Button>
            </div>
          </div>
        </form>
      </article>
    </UserCommentInputFinal>
  )
}
