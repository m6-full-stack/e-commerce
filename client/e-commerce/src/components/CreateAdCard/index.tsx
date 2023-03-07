import React, { useContext, useEffect } from 'react'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { UserContext } from '../../contexts/UserProvider/UserProvider'
import { IUser } from '../../interfaces/LoginInterface'
import { Heading, Paragraph } from '../../styles/typography'
import Button from '../Button'
import { CardContainer } from './style'

interface adCardProps {
  isAdmin: Boolean
  user: IUser
}

export const CreateAdCard = ({ isAdmin }: adCardProps) => {
  const { setIsModelCreate } = useContext(ModalContext)
  const { user } = useContext(UserContext)

  return (
    <CardContainer>
      <div className='content'>
        <div className='content-title'>
          <div className='border'>
            <Paragraph
              color='whiteFixed'
              size='xlarge'
              fontWeight={500}
              lineHeight={'52.94px'}
            >
              {user?.name.substring(0, 2).toUpperCase()}
            </Paragraph>
          </div>

          <div className='content-name'>
            <Heading
              size='plus'
              fontWeight={600}
              lineHeight={'25px'}
              level={3}
              color={'grey1'}
            >
              {user?.name}
            </Heading>
            <div className='content-advertiser'>
              <Paragraph
                color='brand1'
                size='small'
                fontWeight={500}
                lineHeight={'24px'}
              >
                Anunciante
              </Paragraph>
            </div>
          </div>

          <Paragraph
            color='grey2'
            size='normal'
            fontWeight={400}
            lineHeight={'28px'}
          >
            {user?.description}
          </Paragraph>
        </div>
        {isAdmin && (
          <Button
            variant='transparent'
            buttonSize='tprofca'
            onClick={() => setIsModelCreate(true)}
          >
            Criar Anuncio
          </Button>
        )}
      </div>
    </CardContainer>
  )
}
