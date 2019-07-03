import { combineReducers } from 'redux'
import { reducer as adminReducer } from './modules/admin'

export default combineReducers({
  admin: adminReducer,
})
