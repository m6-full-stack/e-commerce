import { Heading } from '../../styles/typography'
import { InputText, UserCommentInput } from './styles'
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationUserComment } from '../../validators/validationUserComment'
import Button from '../Button'

export const ActualUserComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationUserComment),
  })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <UserCommentInput>
      <div className="divCommentContainer">
        <div className="divTopComments">
          <Heading size="small" className="userCommentsImage">
            SL
          </Heading>
          <Heading className="userCommentsName" color={'grey1'}>
            Samuel Leão
          </Heading>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            type="textarea"
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            {...register('comment')}
          />
          <p className="errors">{errors.comment?.message?.toString()}</p>
          <Button variant="blue" buttonSize="b1pcom">
            Comentar
          </Button>
        </form>
      </div>
    </UserCommentInput>
  )
}
