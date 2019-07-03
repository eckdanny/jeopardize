import { combineReducers } from 'redux'
import { reducer as adminReducer } from './modules/admin'
import { reducer as teamsReducer } from './modules/teams'

const rootReducer = combineReducers({
  admin: adminReducer,
  teams: teamsReducer,
})

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
