'use strict'

import {
  PHOTO_CONFIGURE,
  PHOTO_TOGGLE_DIASHOW
} from './types'

import store from 'src/store'
import Photos from 'src/app/photos'
import initEvent from 'src/lib/init-event'

export function toggleCaption () {
  const configuration = store.getState().photo
  let caption = configuration.caption

  switch (caption) {
    case 'light':
      caption = 'dark'
      break
    case 'dark':
      caption = 'off'
      break
    default:
      caption = 'light'
  }

  return {
    type: PHOTO_CONFIGURE,
    options: {
      caption: caption
    }
  }
}


export function toggleDiashow () {
  const configuration = store.getState().photo
  let diashow = configuration.diashow

  if (diashow.interval) {
    clearInterval(diashow.interval)
    diashow.interval = null
  } else {
    const frequency = diashow.frequency || 10000

    diashow.interval = setInterval(() => {
      initEvent('photos:next')
    }, frequency)
  }

  return {
    type: PHOTO_TOGGLE_DIASHOW,
    diashow: diashow
  }
}
