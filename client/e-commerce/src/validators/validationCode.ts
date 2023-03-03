import * as yup from 'yup'

export const validationCode = yup.object().shape({
  code: yup.string().required('O código de recuperação é inválido'),
})
