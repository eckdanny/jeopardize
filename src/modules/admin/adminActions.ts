import { ActionCreator } from 'redux'
import {
  SHOW,
  HIDE,
  TOGGLE,
  IShowAdminAction,
  IHideAdminAction,
  IToggleAdminAction,
} from './adminTypes'

export const showAdmin: ActionCreator<IShowAdminAction> = () => ({ type: SHOW })

export const hideAdmin: ActionCreator<IHideAdminAction> = () => ({ type: HIDE })

export const toggleAdmin: ActionCreator<IToggleAdminAction> = () => ({
  type: TOGGLE,
})
