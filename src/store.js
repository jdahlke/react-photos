'use strict'

import { createStore, combineReducers } from 'redux'

import { photoReducer } from 'src/pages/photo/store'

console.log(photoReducer)

const store = createStore(
  combineReducers({
    photo: photoReducer
  })
)

export default store
