import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { ProductContainerFinal } from './style'

import car1 from '../../assets/images/car_1.svg'

import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { validationUserComment } from '../../validators/validationUserComment'
import {
  CommentContext,
  CommentData,
} from '../../contexts/CommentProvider/CommentProvider'
import { InputText } from '../../components/ActualUserComment/styles'
import { SectionProductsFinal } from '../../components/SectionProductsFinal'
import { AsideProductsFinal } from '../../components/AsideProductsFinal'
import { CommentsCardsFinal } from '../../components/CommentCardsFinal'

import { ActualUserCommentFinal } from '../../components/ActualUserCommentFinal'
import { useParams } from 'react-router-dom'
import { AnnouncementContext } from '../../contexts/AnnouncementProvider/AnnouncementProvide'

export const ProductFinal = () => {
  const { getRetriveAnnouncement } = useContext(AnnouncementContext);
  const { id } = useParams();
  
  useEffect(() => {
    id && getRetriveAnnouncement(id);
  }, []);

  return (
    <ProductContainerFinal>
      <main>
        
        <div className="testt">
          <div className="content-section">
            <SectionProductsFinal />
          </div>
          
          <div className="content-aside">
            <AsideProductsFinal />
          </div>
          
          <div className="content-comment">
            <CommentsCardsFinal />
          </div>
          
          <div className="content-actual">
            <ActualUserCommentFinal />
          </div>
        </div>

        <section className='off'>
          <AsideProductsFinal />
        </section>
      </main>
    </ProductContainerFinal>
  )
}
