import { ADD, UPDATE, REMOVE, ITeamsState } from './teamsTypes'
import { ITeamsActions } from './teamsActions'
import uuid from 'uuid'

const initialState: ITeamsState = []

function reducer(state = initialState, action: ITeamsActions) {
  switch (action.type) {
    case ADD:
      return state.concat({ id: uuid(), name: action.payload })
    case REMOVE:
      return state.filter(team => team.id != action.payload)
    case UPDATE:
      return state.map(d => (d.id === action.payload.id ? action.payload : d))
    default:
      return state
  }
}

export default reducer
