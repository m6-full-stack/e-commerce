import React from 'react'
import { Paragraph } from '../../styles/typography'
import { AvatarContainer } from './style'

export const AvatarUser = () => {
  return (
    <AvatarContainer>
      <div className="content-avatar">
        <div className="border-initials">
          <span>MA</span>
        </div>
        <Paragraph
          fontWeight={500}
          size={'small'}
          color={'grey1'}
          lineHeight={'24px'}
        >
          Marcos Antônio
        </Paragraph>
      </div>
    </AvatarContainer>
  )
}
