import { useContext } from 'react'
import { AnnouncementContext } from '../../contexts/AnnouncementProvider/AnnouncementProvide'
import { Heading, Paragraph } from '../../styles/typography'
import { UserCommentCardFinal } from './styles'

export const CommentsCardsFinal = () => {
  const { announcementInfo } = useContext(AnnouncementContext)

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
      </div>
      {announcementInfo.comments &&
        announcementInfo.comments.map((elem) => (
          <section className="content-comments" key={elem.id}>
              
            <article className="content-comment">
              <div className="content-avatar">
                <div className="border-initials">
                  <span>{elem.user.name.substring(0, 2).toUpperCase()}</span>
                </div>
                <Paragraph
                  fontWeight={500}
                  size={'small'}
                  color={'grey1'}
                  lineHeight={'24px'}
                >
                  {elem.user.name}
                </Paragraph>
                <Paragraph
                  className="time-pass"
                  fontWeight={400}
                  size={'small'}
                  color={'grey3'}
                  lineHeight={'24px'}
                >
                  {elem.created_at.split('T')[0].replace(/-/g, '/')}
                  
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
        ))}
    </UserCommentCardFinal>
  )
}
