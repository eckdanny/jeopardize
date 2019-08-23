export const SAY_HI = 'SAY_HI'
export const SAY_BYE = 'SAY_BYE'
export const SAY_SOMETHING = 'SAY_SOMETHING'

interface SayHiAction {
  type: typeof SAY_HI
}

interface SayByeAction {
  type: typeof SAY_BYE
}

interface SaySomethingAction {
  type: typeof SAY_SOMETHING
  payload: string
}

export interface MessageState {
  message: string
}

export type ActionTypes = SayHiAction | SayByeAction | SaySomethingAction

type Team = {
  id: string
  name: string
}

type Question = {
  id: string
  value: number
  challenge: string
  solution: string
}

type Content = {
  id: string
  name: string
  categories: Array<{
    id: string
    name: string
    questions: Array<Question>
  }>
}

type AllState = {
  teams: Array<Team>
  content: Content
  game: {
    controllingTeamId: Team['id'] | null
    score: Record<Team['id'], number>
    activeQuestionId: Question['id'] | null
    closedQuestionIds: Array<Question['id']>
  }
}
