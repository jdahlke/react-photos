import { combineReducers } from 'redux'

import { photoReducer } from 'src/pages/photo/store'

export const reducers = combineReducers({
  photo: photoReducer
})
