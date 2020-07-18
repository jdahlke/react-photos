'use strict'

import React from 'react'
import { connect } from 'react-redux'

import { TEXT } from 'src/constants'
import { toggleDiashow } from './store'

const PhotoDiaShow = (props) => {
  const { diashow } = props
  let button = TEXT.diashow.play.button
  let title = TEXT.diashow.play.title

  if (diashow.interval) {
    button = TEXT.diashow.stop.button
    title = TEXT.diashow.stop.title
  }

  return (
    <div className='diashow' onClick={() => { props.toggleDiashow(history) }}>
      <span title={title}>{button}</span>
    </div>
  )
}

const mapStateToProps = state => ({
  diashow: state.photo.diashow
})

const mapDispatchToProps = {
  toggleDiashow
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDiaShow)
