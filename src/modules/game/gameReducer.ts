import { IGameState } from './gameTypes'

const initialState: IGameState = {
  teamControlId: null,
  activeQuestionId: null,
  retiredQuestions: {},
}

function reducer(state: IGameState = initialState, action: any): IGameState {
  return state
}

export default reducer
