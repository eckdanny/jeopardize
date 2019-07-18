export const NEXT = 'jeopardize/wizard/NEXT'
export const PREVIOUS = 'jeopardize/wizard/PREVIOUS'
export const SET_STEPS = 'jeopardize/wizard/SET_STEPS'

export interface IWizardState {
  steps: number
  current: number
}
