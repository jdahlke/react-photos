'use strict'

import {
  PHOTO_TOGGLE_DIASHOW
} from './types'


const initialState = {
  caption: 'light',
  diashow: {
    frequency: 15000,
    interval: null
  }
}

export default (state = initialState, action) => {
  console.log(action)

  switch (action.type) {
    case PHOTO_TOGGLE_DIASHOW: {
      const diashow = {
        diashow: {
          ...state.diashow,
          ...action.diashow
        }
      }

      return { ...state, ...diashow }
    }
    default:
      return state
  }
}
