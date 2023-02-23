import * as yup from 'yup'

export const validationUserComment = yup.object().shape({
  comment: yup.string().min(8).max(300).required('Digite ao menos 3 palavras'),
})
