import * as yup from 'yup'

export const validationUserAnnouncement = yup.object().shape({
  comment: yup.string().min(8).max(300).required('Digite ao menos 3 palavras'),
})
