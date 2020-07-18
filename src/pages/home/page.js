'use strict'

import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { ANIMATED_PAGE_CLASS, TEXT } from 'src/constants'
import homepageImage from 'photos/IMG_1971.jpg'

const Homepage = () => (
  <div className={`home overflow-x-hidden position-relative ${ANIMATED_PAGE_CLASS}`}>
    <Link to='/photos/0'>
      <div className='title'>
        <h1>{TEXT.home.title}</h1>
      </div>
      <div className='image'>
        <img className='center-fit' src={homepageImage} />
      </div>
    </Link>
  </div>
)

export default memo(Homepage)
