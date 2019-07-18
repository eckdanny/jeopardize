import { Reducer } from 'redux'
import { IContentState, ContentAction, SET_CONTENT } from './contentTypes'

const initialState: IContentState = {}

export const reducer: Reducer<IContentState, ContentAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_CONTENT: {
      return action.payload
    }
    default:
      return state
  }
}
