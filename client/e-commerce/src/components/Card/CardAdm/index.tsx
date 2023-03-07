import React, { useContext } from 'react'
import car from '../../../assets/car.svg'
import Button from '../../Button'
import { Heading, Paragraph } from '../../../styles/typography'
import { CardContainer } from './style'
import { ModalContext } from '../../../contexts/ModalProvider/ModalProvider'
import {
  AnnouncementContext,
  AnnouncementData,
} from '../../../contexts/AnnouncementProvider/AnnouncementProvide'
import { UserContext } from '../../../contexts/UserProvider/UserProvider'

type AppProps = {
  announcement: AnnouncementData
  username: string
}

export const CardAdm = ({ announcement, username }: AppProps) => {
  const { setIsModelEditAnnouncement } = useContext(ModalContext)
  const { setAnnouncementId } = useContext(AnnouncementContext)
  const { navigate } = useContext(UserContext)
  return (
    <CardContainer>
      <section>
        <div className='content-img'>
          <img src={announcement.cover_image} alt='foto de carro' />
        </div>
        <div className='content-description'>
          <Heading
            level={3}
            fontWeight={600}
            color={'grey1'}
            lineHeight={'20px'}
          >
            {announcement?.title}
          </Heading>
          <Paragraph
            fontWeight={400}
            size={'small'}
            color={'grey2'}
            lineHeight={'24px'}
          >
            {announcement?.description}
          </Paragraph>
          <div className='content-name'>
            <div className='content-border'>
              <Paragraph
                fontWeight={500}
                size={'small'}
                color={'whiteFixed'}
                lineHeight={'0'}
              >
                {username?.substring(0, 2).toUpperCase()}
              </Paragraph>
            </div>
            <Paragraph
              fontWeight={500}
              size={'small'}
              color={'grey2'}
              lineHeight={'1.5rem'}
            >
              {username!}
            </Paragraph>
          </div>
          <section className='content-year-and-price'>
            <div className='content-year'>
              <div className='border'>
                <Paragraph
                  fontWeight={500}
                  size={'small'}
                  color={'brand1'}
                  lineHeight={'1.5rem'}
                >
                  {announcement?.mileage}
                </Paragraph>
              </div>
              <div className='border'>
                <Paragraph
                  fontWeight={500}
                  size={'small'}
                  color={'brand1'}
                  lineHeight={'1.5rem'}
                >
                  {announcement?.year}
                </Paragraph>
              </div>
            </div>
            <div className='content-price'>
              <Heading
                fontWeight={500}
                level={3}
                size={'normal'}
                color={'grey1'}
                lineHeight={'1.25rem'}
              >
                R$ {announcement?.price},00
              </Heading>
            </div>
          </section>
        </div>
        <div className='content-buttons'>
          <Button
            variant='transparent'
            buttonSize='tprofesm'
            onClick={() => {
              setIsModelEditAnnouncement(true)
              setTimeout(() => {
                setAnnouncementId(announcement.id)
              })
            }}
          >
            Editar
          </Button>
          <Button
            variant='transparent'
            buttonSize='tprofvcsm'
            onClick={() => {
              navigate(`/product/${announcement.id}`)
            }}
          >
            Ver como
          </Button>
        </div>
      </section>
    </CardContainer>
  )
}
