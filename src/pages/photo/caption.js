'use strict'

import React from 'react'

const PhotoCaption = (props) => {
  if (!props.text) { return null }

  const theme = props.theme || 'light'

  return (
    <div className='caption'>
      <p className={theme}>
        {props.text}
      </p>
    </div>
  )
}

export default PhotoCaption
