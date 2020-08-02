'use strict'

import React, { memo } from 'react'

import { TEXT } from 'src/constants'
import importPhotoDirectory from 'src/lib/import-photo-directory'

const Homepage = () => (
  <div className='home'>
    <h1>{TEXT.home.title}</h1>
    <div className='upload'>
      <div className='center-fit'>
        <p>{TEXT.home.choose_folder}</p>
        <input type='file' name='files' webkitdirectory='' multiple onChange={importPhotoDirectory} />
      </div>
    </div>
  </div>
)

export default memo(Homepage)
