import { NEXT, PREVIOUS, SET_STEPS, IWizardState } from './wizardTypes'
import { WizardAction } from './wizardActions'

const initialState: IWizardState = {
  steps: 0,
  current: 0,
}

const reducer = (state: IWizardState = initialState, action: WizardAction) => {
  switch (action.type) {
    case NEXT:
      return {
        ...state,
        current:
          state.current < state.steps - 1 ? state.current + 1 : state.current,
      }
    case PREVIOUS:
      return { ...state, current: state.current === 0 ? 0 : state.current - 1 }
    case SET_STEPS:
      return { ...state, steps: action.payload }
    default:
      return state
  }
}

export default reducer
