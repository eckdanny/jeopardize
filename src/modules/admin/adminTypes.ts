// Types

export const SHOW = 'jeoparity/admin/SHOW'
export const HIDE = 'jeoparity/admin/HIDE'
export const TOGGLE = 'jeoparity/admin/TOGGLE'

// Actions

export interface IShowAdminAction {
  type: typeof SHOW
}

export interface IHideAdminAction {
  type: typeof HIDE
}

export interface IToggleAdminAction {
  type: typeof TOGGLE
}

export type IAdminAction =
  | IShowAdminAction
  | IHideAdminAction
  | IToggleAdminAction

// State

export interface IAdminState {
  isVisible: boolean
}
