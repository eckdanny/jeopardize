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

export const addTeam: ActionCreator<IAddTeamAction> = (
  name: ITeam['name']
) => ({
  type: ADD,
  payload: name,
})

export const updateTeam: ActionCreator<IUpdateTeamAction> = (team: ITeam) => ({
  type: UPDATE,
  payload: team,
})

export const removeTeam: ActionCreator<IRemoveTeamAction> = id => ({
  type: REMOVE,
  payload: id,
})

export type ITeamsActions =
  | IAddTeamAction
  | IUpdateTeamAction
  | IRemoveTeamAction
