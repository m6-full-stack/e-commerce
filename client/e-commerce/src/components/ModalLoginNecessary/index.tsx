import { Heading } from '../../styles/typography'
import { ModalContainer } from './style'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

export const ModalLoginNecessary = () => {

  const { setIsModalLoginNecessary } = useContext(ModalContext)

  const navigate = useNavigate()

  return (
    <ModalContainer>
      <div className='content'>
        <div className='content-title'>
          <Heading
            level={2}
            fontWeight={500}
            size={'normal'}
            color={'alert1'}
            lineHeight={'20px'}
          >
            Atenção
          </Heading>
          <p className='closeModal' onClick={() => setIsModalLoginNecessary(false)}>
            x
          </p>
        </div>
            <p>
              Para ver mais detalhes deste veículo você precisa estar logado.
            </p>
          <div className='content-buttons-create'>

            <button onClick={() => {
              setIsModalLoginNecessary(false)
              navigate("/login")
            }}>
              Faça Login
            </button>
            <button onClick={() => {
                setIsModalLoginNecessary(false)
                navigate("/register")
              }}
            >
              Registre-se
            </button>

          </div>
      </div>
    </ModalContainer>
  )
}
