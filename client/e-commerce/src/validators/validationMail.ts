import * as yup from 'yup'

export const validationMail = yup.object().shape({
  email: yup.string().email().required('O email é obrigatório'),
})
