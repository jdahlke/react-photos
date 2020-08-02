'use strict'

import React from 'react'

import { ANIMATED_PAGE_CLASS } from 'src/constants'
import Caption from './caption'
import DiaShow from './dia-show'
import Photos from 'src/app/photos'

const PhotoPage = (props) => {
  const {
    match: {
      params: { id }
    }
  } = props

  const photo = Photos.get(id)

  return (
    <div className={`overflow-x-hidden position-relative ${ANIMATED_PAGE_CLASS}`}>
      <div className='image'>
        <img className='center-fit' src={photo.src} />
      </div>
      <Caption {...photo.caption} />
      <DiaShow />
    </div>
  )
}

export default PhotoPage
