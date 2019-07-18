import { combineReducers } from 'redux'
import { reducer as adminReducer } from './modules/admin'
import { reducer as teamsReducer } from './modules/teams'
import { reducer as wizardReducer } from './modules/wizard'
import { reducer as contentReducer } from './modules/content'

const rootReducer = combineReducers({
  admin: adminReducer,
  teams: teamsReducer,
  wizard: wizardReducer,
  content: contentReducer,
})

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>

// root selectors

export const selectAdmin = (state: AppState) => state.admin
export const selectTeams = (state: AppState) => state.teams
export const selectWizard = (state: AppState) => state.wizard
export const selectContent = (state: AppState) => state.content
