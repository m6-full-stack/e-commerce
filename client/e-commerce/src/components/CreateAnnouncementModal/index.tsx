import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FieldValues } from 'react-hook-form'
import { validationUserAnnouncement } from '../../validators/validationUserAnnouncement'
import Button from '../Button'
import Input from '../Input'
import { Section } from './style'

export const CreateAnnouncementModal = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationUserAnnouncement),
  })
  return (
    <Section>
      <div className="divCreateAnnouncement">
        <div className="titleClose">
          <h4 className="titlesCloseText">Criar anuncio</h4>
          <p
            className="closeModal"
            onClick={() => {
              console.log('Fechar Modal')
            }}
          >
            x
          </p>
        </div>
        <form onClick={handleSubmit(onSubmit)}>
          <h4 className="titles">Tipo de anuncio</h4>
          <div className="buttonsAnnouncementType">
            <Button
              variant="blue"
              buttonSize="b3profmodca"
              onClick={() => {
                console.log('Tipo Venda')
              }}
            >
              Venda
            </Button>
            <Button
              variant="transparent"
              buttonSize="b4profmodca"
              onClick={() => {
                console.log('Tipo Leilão')
              }}
            >
              Leilão
            </Button>
          </div>
          <h4 className="titles">Informações do veículo</h4>
          <Input
            label="Título"
            placeholder="Digitar título"
            name="title"
            register={register}
            errosMessage={errors.username?.message?.toString()}
          />
          <div className="inputGroup">
            <Input
              label="Ano"
              placeholder="Digitar ano"
              name="year"
              register={register}
              errosMessage={errors.year?.message?.toString()}
            />
            <Input
              className="inputSpacement"
              label="Quilometragem"
              placeholder="0"
              name="mileage"
              register={register}
              errosMessage={errors.mileage?.message?.toString()}
            />
            <Input
              label="Preço"
              placeholder="Digitar preço"
              name="price"
              register={register}
              errosMessage={errors.price?.message?.toString()}
            />
          </div>
          <h4 className="titles">Tipo de veículo</h4>
          <div className="buttonsAnnouncementType">
            <Button
              variant="blue"
              buttonSize="b3profmodca"
              onClick={() => {
                console.log('Carro')
              }}
            >
              Carro
            </Button>
            <Button
              variant="transparent"
              buttonSize="b4profmodca"
              onClick={() => {
                console.log('Moto')
              }}
            >
              Moto
            </Button>
          </div>
          <Input
            label="Imagem da capa"
            placeholder="Inserir URL da imagem"
            name="cover_image"
            register={register}
            errosMessage={errors.cover_image?.message?.toString()}
          />
          <Input
            label="1ª Imagem da galeria"
            placeholder="Inserir URL da imagem"
            name="cover_image"
            register={register}
            errosMessage={errors.cover_image?.message?.toString()}
          />
          <button
            id="buttonAddImage"
            onClick={() => {
              console.log('Adicionar mais campo de imagem')
            }}
          >
            Adicionar campo para imagem da galeria
          </button>
          <div className="buttonsAnnouncementCancelOrAccept">
            <Button
              variant="blue"
              buttonSize="b3profmodca"
              onClick={() => {
                console.log('Tipo Venda')
              }}
            >
              Criar Anúncio
            </Button>
            <Button
              variant="transparent"
              buttonSize="b4profmodca"
              onClick={() => {
                console.log('Tipo Leilão')
              }}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </Section>
  )
}
