import { ActionCreator } from 'redux'
import {
  CHALLENGE_OPEN,
  ChallengeOpen,
  ChallengeClose,
  CHALLENGE_CLOSE,
} from './gameTypes'

export const setActiveQuestion: ActionCreator<ChallengeOpen> = (
  questionId: string
) => ({
  type: CHALLENGE_OPEN,
  payload: questionId,
})

export const closeActiveQuestion: ActionCreator<ChallengeClose> = () => ({
  type: CHALLENGE_CLOSE,
})
