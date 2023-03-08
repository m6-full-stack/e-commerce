import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CommentContext } from '../../contexts/CommentProvider/CommentProvider'
import { UserContext } from '../../contexts/UserProvider/UserProvider'
import { UserRequest } from '../../interfaces/LoginInterface'
import { Paragraph } from '../../styles/typography'
import { AvatarContainer } from './style'

export const AvatarUser = () => {
  const { createComment } = useContext(CommentContext)
  const { getProfile } = useContext(UserContext)

  const [infoUserComment, setInfoUserComment] = useState<UserRequest>(
    {} as UserRequest
  )
  const { id } = useParams()

  useEffect(() => {
    getProfile().then((res) => setInfoUserComment(res))
  }, [])

  return (
    <AvatarContainer>
      <div className="content-avatar">
        <div className="border-initials">
          <span>{infoUserComment.name && infoUserComment.name.substring(0, 2).toUpperCase()}</span>
        </div>

        <Paragraph
          fontWeight={500}
          size={'small'}
          color={'grey1'}
          lineHeight={'24px'}
        >
          {infoUserComment.name && infoUserComment.name}
        </Paragraph>
      </div>
    </AvatarContainer>
  )
}
