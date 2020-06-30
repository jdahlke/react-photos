'use strict'

import {
  PHOTO_CONFIGURE
} from './types'

import store from 'src/store'

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
