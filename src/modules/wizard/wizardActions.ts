import { NEXT, PREVIOUS, SET_STEPS } from './wizardTypes'

interface SetStepsAction {
  type: typeof SET_STEPS
  payload: number
}

export const setSteps = (count: number) => ({ type: SET_STEPS, payload: count })

interface NextAction {
  type: typeof NEXT
}

export const next = () => ({ type: NEXT })

interface PreviousAction {
  type: typeof PREVIOUS
}

export const previous = () => ({ type: PREVIOUS })

export type WizardAction = SetStepsAction | NextAction | PreviousAction
