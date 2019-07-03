export const namespace = `jeoparity/teams`

// Types

export const ADD = `jeoparity/teams_ADD`
export const UPDATE = `jeoparity/teams_UPDATE`
export const REMOVE = `jeoparity/teams_REMOVE`

// State

export interface ITeam {
  id: string
  name: string
}

export type ITeamsState = ITeam[]
