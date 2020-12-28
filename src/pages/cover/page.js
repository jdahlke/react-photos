'use strict'

import isEmpty from 'is-empty'
import React from 'react'

import { ANIMATED_PAGE_CLASS } from 'src/constants'
import DiaShow from 'src/pages/photo/dia-show'
import Photos from 'src/app/photos'

const CoverPage = (props) => {
  const cover = Photos.cover

  if (isEmpty(cover)) {
    window.location.href = '/'
    return null
  }

  return (
    <div className={`cover overflow-x-hidden position-relative ${ANIMATED_PAGE_CLASS}`}>
      <div className='title'>
        <h1>{cover.title}</h1>
      </div>
      <div className='image'>
        <img className='center-fit' src={cover.src} />
      </div>
      <DiaShow />
    </div>
  )
}

export default CoverPage
