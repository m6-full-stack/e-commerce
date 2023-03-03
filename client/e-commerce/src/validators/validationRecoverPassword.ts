import * as yup from 'yup'

export const validationRecoverPassword = yup.object().shape({
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve conter no minímo 8 caracteres'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'A confirmação deve ser igual a senha'),
})
