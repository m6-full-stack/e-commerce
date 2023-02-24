import * as yup from 'yup'

export const validationUserComment = yup.object().shape({
  title: yup.string().min(30).max(100).required('Digite ao menos 3 palavras'),
})
