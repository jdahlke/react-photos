'use strict'

import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { ANIMATED_PAGE_CLASS } from 'src/constants'
import homepageImage from 'photos/IMG_1971.jpg'

const Homepage = () => (
  <div className={`overflow-x-hidden position-relative ${ANIMATED_PAGE_CLASS}`}>
    <Link to='/photos/0'>
      <div className='home image'>
        <img className='center-fit' src={homepageImage} />
      </div>
    </Link>
  </div>
)

export default memo(Homepage)
