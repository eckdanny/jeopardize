import { ActionCreator, Action } from 'redux'
import { SHOW, HIDE, TOGGLE } from './adminTypes'

interface IShowAdminAction extends Action {
  type: typeof SHOW
}

interface IHideAdminAction extends Action {
  type: typeof HIDE
}

interface IToggleAdminAction extends Action {
  type: typeof TOGGLE
}

export const showAdmin: ActionCreator<IShowAdminAction> = () => ({ type: SHOW })

export const hideAdmin: ActionCreator<IHideAdminAction> = () => ({ type: HIDE })

export const toggleAdmin: ActionCreator<IToggleAdminAction> = () => ({
  type: TOGGLE,
})

export type AdminActions =
  | IShowAdminAction
  | IHideAdminAction
  | IToggleAdminAction
