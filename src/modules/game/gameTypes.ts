import { ITeam } from '../teams/teamsTypes'
import { Action } from 'redux'

export const CHALLENGE_OPEN = 'jeopardize/game/CHALLENGE_OPEN'
export const CHALLENGE_CLOSE = 'jeopardize/game/CHALLEGE_CLOSE'
export const CHALLENGE_SUCCESS = 'jeopardize/game/CHALLENGE_SUCCESS'
export const CHALLENGE_FAILURE = 'jeopardize/game/CHALLENGE_FAILURE'

export interface ChallengeOpen extends Action {
  type: typeof CHALLENGE_OPEN
  payload: string
  meta?: {
    from: Pick<DOMRect, 'top' | 'left' | 'height' | 'width'>
  }
}

export interface ChallengeClose extends Action {
  type: typeof CHALLENGE_CLOSE
}

export interface ChallengeSuccessAction extends Action {
  type: typeof CHALLENGE_SUCCESS
  payload: {
    teamId: ITeam['id']
    questionId: string
    value: number
  }
}

export interface ChallengeFailureAction extends Action {
  type: typeof CHALLENGE_FAILURE
  payload: {
    teamId: ITeam['id']
    questionId: string
    value: number
  }
}

export type GameAction =
  | ChallengeOpen
  | ChallengeClose
  | ChallengeSuccessAction
  | ChallengeFailureAction

export type IGameState = {
  controllingTeamId: ITeam['id'] | null
  activeQuestionId: string | null
  outcomes: {
    [questionId: string]: boolean
  }
  score: {
    [teamId: string]: number
  }
}
