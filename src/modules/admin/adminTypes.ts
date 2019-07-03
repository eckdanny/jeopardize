const namespace = 'jeoparity/admin'

// Types

export const SHOW = `${namespace}_SHOW`
export const HIDE = `${namespace}_HIDE`
export const TOGGLE = `${namespace}_TOGGLE`

// State

export interface IAdminState {
  isVisible: boolean
}
