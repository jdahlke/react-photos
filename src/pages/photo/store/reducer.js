'use strict'

import {
  PHOTO_CONFIGURE
} from './types'


const initialState = {
  caption: 'light'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PHOTO_CONFIGURE:
      return {
        ...state,
        ...action.options
      }
    default:
      return state
  }
}
