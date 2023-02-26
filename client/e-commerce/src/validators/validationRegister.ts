import * as yup from 'yup'

export const validationRegister = yup.object().shape({
  username: yup.string().required('O username é obrigatório'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve conter no minímo 8 caracteres'),
})
