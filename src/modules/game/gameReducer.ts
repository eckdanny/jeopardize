import { createSelector } from 'reselect'
import {
  IGameState,
  GameAction,
  CHALLENGE_OPEN,
  CHALLENGE_SUCCESS,
  CHALLENGE_CLOSE,
} from './gameTypes'

const initialState: IGameState = {
  controllingTeamId: null,
  activeQuestionId: null,
  outcomes: {},
  score: {},
}

export function reducer(
  state: IGameState = initialState,
  action: GameAction
): IGameState {
  switch (action.type) {
    case CHALLENGE_OPEN: {
      return { ...state, activeQuestionId: action.payload }
    }
    case CHALLENGE_CLOSE: {
      return { ...state, activeQuestionId: null }
    }
    case CHALLENGE_SUCCESS: {
      return {
        ...state,
        controllingTeamId: action.payload.teamId,
        activeQuestionId: null,
        outcomes: {
          ...state.outcomes,
          [action.payload.questionId]: true,
        },
        score: {
          ...state.score,
          [action.payload.teamId]:
            action.payload.value + (state.score[action.payload.teamId] || 0),
        },
      }
    }
    default:
      return state
  }
}

export default reducer

const base: (x: { game: IGameState }) => IGameState = state => state.game

export const getActiveQuestionId = createSelector(base, state => state.activeQuestionId)

export const isActiveGame = createSelector(base, state => {
  if (state.controllingTeamId) return true
  if (state.activeQuestionId) return true
})
