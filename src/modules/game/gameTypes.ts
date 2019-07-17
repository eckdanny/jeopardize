import { ITeam } from '../teams/teamsTypes'

export type IGameState = {
  teamControlId: ITeam['id'] | null
  activeQuestionId: string | null
  retiredQuestions: {
    [questionId: string]: boolean
  }
}

// export const Foo: IGameState = {
//   teamControlId: '42',
// }
