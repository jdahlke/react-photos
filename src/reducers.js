'use strict'

import { combineReducers } from 'redux'

// import { photoReducer } from 'src/pages/photo/store'
import photoReducer from 'src/pages/photo/store/reducer'

export const reducers = combineReducers({
  photo: photoReducer
})
