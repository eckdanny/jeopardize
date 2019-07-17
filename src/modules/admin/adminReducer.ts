import { Reducer } from 'redux'
import { IAdminState, SHOW, HIDE, TOGGLE, IAdminAction } from './adminTypes'

const initialState: IAdminState = {
  isVisible: false,
}

export const reducer: Reducer<IAdminState, IAdminAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SHOW:
      return state.isVisible ? state : { isVisible: true }
    case HIDE:
      return !state.isVisible ? state : { isVisible: false }
    case TOGGLE:
      return { isVisible: !state.isVisible }
    default:
      return state
  }
}

// Selectors

export const getIsVisible = (state: IAdminState) => state.isVisible

export default reducer
