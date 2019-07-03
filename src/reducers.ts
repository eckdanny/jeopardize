import { combineReducers } from 'redux'
import {
  reducer as adminReducer,
  actionType as adminType,
} from './modules/admin'

const rootReducer = combineReducers({
  admin: adminReducer,
})

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
