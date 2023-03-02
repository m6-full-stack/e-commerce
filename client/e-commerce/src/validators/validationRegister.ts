import * as yup from 'yup'

export const validationRegister = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),

  email: yup
    .string()
    .email(' Deve ser um email ')
    .required(' Email é obrigatório '),

  cpf: yup.string().required(' Cpf é obrigatório '),

  phone: yup.string().required(' número é obrigatório '),

  birthdate: yup.string().required(' Data de nascimento é obrigatório '),

  description: yup.string().required(' A descrição é obrigatória '),

  cep: yup.string().required(' O cep é obrigatório '),

  state: yup.string().required(' O estado é obrigatório '),

  city: yup.string().required(' A cidade é obrigatória '),

  street: yup.string().required(' A rua é obrigatória '),

  number: yup.string().required(' O número é obrigatório '),

  complement: yup.string().required('O complemento é obrigatório'),

  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve conter no minímo 8 caracteres'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'A confirmação deve ser igual a senha'),
})
