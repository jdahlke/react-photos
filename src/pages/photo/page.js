'use strict'

import React from 'react'

import { ANIMATED_PAGE_CLASS } from 'src/constants'
import Caption from './caption'
import Photos from 'src/app/photos'

const PhotoPage = (props) => {
  const {
    match: {
      params: { id }
    }
  } = props

  const photo = Photos.get(id)
  const title = photo.caption.text || ''

  return (
    <div className={`overflow-x-hidden position-relative ${ANIMATED_PAGE_CLASS}`}>
      <div className='image'>
        <img className='center-fit' src={photo.src.default} title={title} />
      </div>
      <Caption {...photo.caption} />
    </div>
  )
}

export default PhotoPage

