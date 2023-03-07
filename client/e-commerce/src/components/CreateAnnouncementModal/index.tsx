import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { AnnouncementContext } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { validationUserAnnouncement } from '../../validators/validationUserAnnouncement'
import Input, { Input2, TextArea } from '../Input'
import { ButtonBlue, ButtonTransp, Section } from './style'

export const CreateAnnouncementModal = () => {
  const { setIsModelCreate } = useContext(ModalContext)
  const {
    registerAnnouncement,
    typeAnnouncement,
    setTypeAnnouncement,
    typeVehicle,
    setTypeVehicle,
  } = useContext(AnnouncementContext)
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
      <div className='divCreateAnnouncement'>
        <div className='titleClose'>
          <h4 className='titlesCloseText'>Criar anuncio</h4>
          <p
            className='closeModal'
            onClick={() => {
              setIsModelCreate(false)
            }}
          >
            x
          </p>
        </div>
        <form onSubmit={handleSubmit((data) => registerAnnouncement(data))}>
          <h4 className='titles'>Tipo de anuncio</h4>
          <div className='buttonsAnnouncementType'>
            <ButtonBlue
              type='button'
              onClick={() => {
                setTypeAnnouncement('venda')
              }}
            >
              Venda
            </ButtonBlue>
            <ButtonTransp
              type='button'
              onClick={() => {
                setTypeAnnouncement('leilão')
              }}
            >
              Leilão
            </ButtonTransp>
          </div>
          <h4 className='titles'>Informações do veículo</h4>
          <Input2
            label='Título'
            placeholder='Digitar título'
            name='title'
            register={register}
            errosMessage={errors.title?.message?.toString()}
          />
          <div className='inputGroup'>
            <Input2
              label='Ano'
              placeholder='Digitar ano'
              name='year'
              register={register}
              errosMessage={errors.year?.message?.toString()}
            />
            <Input2
              className='inputSpacement'
              label='Quilometragem'
              placeholder='0'
              name='mileage'
              register={register}
              errosMessage={errors.mileage?.message?.toString()}
            />
            <Input2
              label='Preço'
              placeholder='Digitar preço'
              name='price'
              register={register}
              errosMessage={errors.price?.message?.toString()}
            />
          </div>
          <TextArea
            label='Descrição'
            placeholder='Lorem Ipsum is simply dummy text of the printing'
            name='description'
            register={register}
            errosMessage={errors.description?.message?.toString()}
          />
          <h4 className='titles'>Tipo de veículo</h4>
          <div className='buttonsAnnouncementType'>
            <ButtonBlue
              onClick={() => {
                setTypeVehicle('carro')
              }}
            >
              Carro
            </ButtonBlue>
            <ButtonTransp
              onClick={() => {
                setTypeVehicle('moto')
              }}
            >
              Moto
            </ButtonTransp>
          </div>
          <Input2
            label='Imagem da capa'
            placeholder='Inserir URL da imagem'
            name='cover_image'
            register={register}
            errosMessage={errors.cover_image?.message?.toString()}
          />
          <Input2
            label='1ª Imagem da galeria'
            placeholder='Inserir URL da imagem'
            name='image1'
            register={register}
            errosMessage={errors.image1?.message?.toString()}
          />
          <Input2
            label='1ª Imagem da galeria'
            placeholder='Inserir URL da imagem'
            name='image1'
            register={register}
            errosMessage={errors.image1?.message?.toString()}
          />
          <div className='createAnnuncement'>
            <button
              id='buttonAddImage'
              type='button'
              onClick={() => {
                console.log('Adicionar mais campo de imagem')
              }}
            >
              Adicionar campo para imagem da galeria
            </button>
            <div className='buttonsAnnouncementCancelOrAccept'>
              <ButtonBlue
                type='submit'
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
                Cancelar
              </ButtonTransp>
            </div>
          </div>
        </form>
      </div>
    </Section>
  )
}
