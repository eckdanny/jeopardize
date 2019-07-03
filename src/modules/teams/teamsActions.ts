import { ActionCreator, Action } from 'redux'
import { ADD, UPDATE, REMOVE, ITeam } from './teamsTypes'

interface IAddTeamAction extends Action {
  type: typeof ADD
  payload: ITeam['name']
}

interface IUpdateTeamAction extends Action {
  type: typeof UPDATE
  payload: ITeam
}

interface IRemoveTeamAction extends Action {
  type: typeof REMOVE
  payload: ITeam['id']
}

/**
 * Add a new team
 * @param name Name of the new team
 */
export const addTeam = (name: ITeam['name']): IAddTeamAction => ({
  type: ADD,
  payload: name,
})

export const updateTeam: ActionCreator<IUpdateTeamAction> = (team: ITeam) => ({
  type: UPDATE,
  payload: team,
})

export const removeTeam = (id: ITeam['id']): IRemoveTeamAction => ({
  type: REMOVE,
  payload: id,
})

export type ITeamsActions =
  | IAddTeamAction
  | IUpdateTeamAction
  | IRemoveTeamAction
