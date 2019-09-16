import { combineReducers } from 'redux'
import { reducer as adminReducer } from './modules/admin'
import { reducer as teamsReducer } from './modules/teams'
import { reducer as wizardReducer } from './modules/wizard'
import { reducer as contentReducer } from './modules/content'
import { reducer as gameReducer } from './modules/game'

const rootReducer = combineReducers({
  admin: adminReducer,
  teams: teamsReducer,
  wizard: wizardReducer,
  content: contentReducer,
  game: gameReducer,
})

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>

const mkRootSelector = (name: keyof AppState) => {
  return (state: AppState) => state.admin
}

export const selectAdmin = (state: AppState) => state.admin
// export const selectAdmin = mkRootSelector('admin')
export const selectTeams = (state: AppState) => state.teams
export const selectWizard = (state: AppState) => state.wizard
export const selectContent = (state: AppState) => state.content
export const selectGame = (state: AppState) => state.game
