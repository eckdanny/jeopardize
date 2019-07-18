// Types

export const SHOW = 'jeopardize/admin/SHOW'
export const HIDE = 'jeopardize/admin/HIDE'
export const TOGGLE = 'jeopardize/admin/TOGGLE'

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
