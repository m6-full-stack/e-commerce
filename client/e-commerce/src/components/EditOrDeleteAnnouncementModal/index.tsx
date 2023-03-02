import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FieldValues } from 'react-hook-form'
import { validationUserAnnouncement } from '../../validators/validationUserAnnouncement'
import { Input2, TextArea } from '../Input'
import { ButtonBlue, ButtonTransp, Section } from './style'

export const EditOrDeleteAnnouncementModal = () => {
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
          <h4 className="titlesCloseText">Editar anuncio</h4>
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
            <ButtonBlue
              onClick={() => {
                console.log('Tipo Venda')
              }}
            >
              Venda
            </ButtonBlue>
            <ButtonTransp
              onClick={() => {
                console.log('Tipo Leilão')
              }}
            >
              Leilão
            </ButtonTransp>
          </div>
          <h4 className="titles">Informações do veículo</h4>
          <Input2
            label="Título"
            placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
            name="title"
            register={register}
            errosMessage={errors.username?.message?.toString()}
          />
          <div className="inputGroup">
            <Input2
              label="Ano"
              placeholder="2018"
              name="year"
              register={register}
              errosMessage={errors.year?.message?.toString()}
            />
            <Input2
              className="inputSpacement"
              label="Quilometragem"
              placeholder="0"
              name="mileage"
              register={register}
              errosMessage={errors.mileage?.message?.toString()}
            />
            <Input2
              label="Preço"
              placeholder="50.000,00"
              name="price"
              register={register}
              errosMessage={errors.price?.message?.toString()}
            />
          </div>
          <TextArea
            label="Descrição"
            placeholder="Lorem Ipsum is simply dummy text of the printing"
            name="description"
            register={register}
            errosMessage={errors.description?.message?.toString()}
          />
          <h4 className="titles">Tipo de veículo</h4>
          <div className="buttonsAnnouncementType">
            <ButtonBlue
              onClick={() => {
                console.log('Carro')
              }}
            >
              Carro
            </ButtonBlue>
            <ButtonTransp
              onClick={() => {
                console.log('Moto')
              }}
            >
              Moto
            </ButtonTransp>
          </div>
          <h4 className="titles">Publicado</h4>
          <div className="buttonsAnnouncementType">
            <ButtonTransp
              onClick={() => {
                console.log('Carro')
              }}
            >
              Sim
            </ButtonTransp>
            <ButtonBlue
              onClick={() => {
                console.log('Moto')
              }}
            >
              Não
            </ButtonBlue>
          </div>
          <Input2
            label="Imagem da capa"
            placeholder="Inserir URL da imagem"
            name="cover_image"
            register={register}
            errosMessage={errors.cover_image?.message?.toString()}
          />
          <Input2
            label="1ª Imagem da galeria"
            placeholder="Inserir URL da imagem"
            name="cover_image"
            register={register}
            errosMessage={errors.cover_image?.message?.toString()}
          />
          <div className="createAnnuncement">
            <button
              id="buttonAddImage"
              onClick={() => {
                console.log('Adicionar mais campo de imagem')
              }}
            >
              Adicionar campo para imagem da galeria
            </button>
            <div className="buttonsAnnouncementCancelOrAccept">
              <ButtonBlue
                onClick={() => {
                  console.log('Tipo Venda')
                }}
              >
                Criar Anúncio
              </ButtonBlue>
              <ButtonTransp
                onClick={() => {
                  console.log('Cancelar')
                }}
              >
                Excluir anúncio
              </ButtonTransp>
            </div>
          </div>
        </form>
      </div>
    </Section>
  )
}
