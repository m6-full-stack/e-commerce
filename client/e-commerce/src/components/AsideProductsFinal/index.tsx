import { useContext, useState } from 'react'
import car1 from '../../assets/images/car_1.svg'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { Heading, Paragraph } from '../../styles/typography'
import Button from '../../components/Button'
import { AsideProductsStyleFinal } from './style'
import { AnnouncementContext } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { useNavigate } from 'react-router-dom'

export const AsideProductsFinal = () => {
  const { modalPhoto } = useContext(ModalContext)
  const { announcementInfo } = useContext(AnnouncementContext)
  const navigate = useNavigate()

  return (
    <AsideProductsStyleFinal>
      <aside>
        {/* mini-fotos */}
        <figure>
          <Heading
            fontWeight={600}
            level={3}
            size={'plus'}
            color={'grey1'}
            lineHeight={'25px'}
          >
            Fotos
          </Heading>
          <div className='content-small-photos-row1'>
            <div className='content-small-img'>
              {announcementInfo.images_list.length > 0 &&
                announcementInfo.images_list.map((elem, index) => {
                  if (index < 6) {
                    return (
                      <img
                        className='otherImages'
                        src={elem.image_url}
                        alt=''
                        key={elem.id}
                        onClick={() => {
                          modalPhoto(elem.image_url)
                        }}
                      />
                    )
                  }
                })}
            </div>
          </div>
        </figure>

        {/* cardUser */}
        <article>
          <section className='content-card-user'>
            <div className='content-initials'>
              <span>
                {announcementInfo.advertiser &&
                  announcementInfo.advertiser.name[0]}
              </span>
            </div>
            <Heading
              fontWeight={600}
              level={3}
              size={'plus'}
              color={'grey1'}
              lineHeight={'25px'}
            >
              {announcementInfo.advertiser && announcementInfo.advertiser.name}
            </Heading>

            <Paragraph
              fontWeight={500}
              size={'normal'}
              color={'grey2'}
              lineHeight={'1.75rem'}
            >
              {announcementInfo.advertiser &&
                announcementInfo.advertiser.description}
            </Paragraph>
            <Button
              variant='grey0'
              buttonSize='g0pvta'
              onClick={() =>
                navigate(`/profileview/${announcementInfo.advertiserId}`)
              }
            >
              Ver todos os anúncios
            </Button>
          </section>
        </article>
      </aside>
    </AsideProductsStyleFinal>
  )
}
