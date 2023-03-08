import * as yup from 'yup'

export const validationUserAnnouncement = yup.object().shape({
  title: yup.string().required('O título é obrigatório'),
  year: yup.string().required('O ano é obrigatório'),
  mileage: yup.string().required('A quilometragem é obrigatória'),
  price: yup.string().required('O preço é obrigatório'),
  description: yup.string().required('A descrição é obrigatória'),
  cover_image: yup.string().required('A imagem de capa é obrigatória'),
  oneImage: yup.string(),
  twoImage: yup.string(),
})
