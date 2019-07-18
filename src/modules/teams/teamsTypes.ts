export const namespace = `jeopardize/teams`

// Types

export const ADD = `jeopardize/teams_ADD`
export const UPDATE = `jeopardize/teams_UPDATE`
export const REMOVE = `jeopardize/teams_REMOVE`

// State

export interface ITeam {
  id: string
  name: string
}

export type ITeamsState = ITeam[]
