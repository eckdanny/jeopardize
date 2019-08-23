import { ActionCreator } from 'redux'
import {
  CHALLENGE_OPEN,
  ChallengeOpen,
  ChallengeClose,
  CHALLENGE_CLOSE,
  ChallengeSuccessAction,
  CHALLENGE_SUCCESS,
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

export const recordChallengeSuccess: ActionCreator<ChallengeSuccessAction> = ({
  teamId,
  questionId,
  value,
}) => ({
  type: CHALLENGE_SUCCESS,
  payload: {
    teamId,
    questionId,
    value,
  },
})
