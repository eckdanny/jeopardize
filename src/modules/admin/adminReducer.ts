import { Reducer } from 'redux'
import { IAdminState, SHOW, HIDE, TOGGLE } from './adminTypes'
import { AdminActions } from './adminActions'

const initialState: IAdminState = {
  isVisible: false,
}

const reducer: Reducer<IAdminState, AdminActions> = (
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

export default reducer
