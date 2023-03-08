import { useContext, useEffect, useState } from 'react'
import { AnnouncementContext } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { ModalContext } from '../../contexts/ModalProvider/ModalProvider'
import { UserContext } from '../../contexts/UserProvider/UserProvider'
import { UserRequest } from '../../interfaces/LoginInterface'
import { Heading, Paragraph } from '../../styles/typography'
import { Card } from '../Card'
import { UserCommentCardFinal } from './styles'

export const CommentsCardsFinal = () => {
  const { announcementInfo } = useContext(AnnouncementContext)
  const { getProfile } = useContext(UserContext)
  const { modalComment } = useContext(ModalContext)
  const [info, setInfo] = useState<UserRequest>({} as UserRequest)
  useEffect(() => {
    getProfile().then((res) => setInfo(res))
  }, [])

  return (
    <UserCommentCardFinal>
      <div className="content-title">
        <Heading
          fontWeight={600}
          level={3}
          size={'plus'}
          color={'grey1'}
          lineHeight={'25px'}
        >
          Comentários
        </Heading>
        {announcementInfo.comments?.length > 0 ? (
          announcementInfo.comments.map((elem) => (
            <section className="content-comments" key={elem.id}>
              <article className="content-comment">
                <div className="content-avatar">
                  <div className="border-initials">
                    <span>{elem.user?.name.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <Paragraph
                    fontWeight={500}
                    size={'small'}
                    color={'grey1'}
                    lineHeight={'24px'}
                  >
                    {elem.user?.name}
                  </Paragraph>
                  <Paragraph
                    fontWeight={400}
                    size={'small'}
                    color={'grey2'}
                    lineHeight={'24px'}
                  >
                    {elem.created_at?.split('T')[0].replace(/-/g, '/')}
                    {elem.user?.id === info.id && (
                      <span
                        className="button-edit"
                        onClick={() => modalComment(elem)}
                      >
                        Editar
                      </span>
                    )}
                  </Paragraph>
                </div>
                <Paragraph
                  fontWeight={400}
                  size={'small'}
                  color={'grey2'}
                  lineHeight={'24px'}
                >
                  {elem.content}
                </Paragraph>
              </article>
            </section>
          ))
        ) : (
          <>
            <Heading
              className="no-ads"
              level={2}
              fontWeight={600}
              size={'plus'}
              color={'grey3'}
              lineHeight={'30px'}
            >
              Não há comentário...
            </Heading>
          </>
        )}
      </div>
    </UserCommentCardFinal>
  )
}
