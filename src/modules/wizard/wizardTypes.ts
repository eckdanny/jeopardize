export const NEXT = 'jeoparity/wizard/NEXT'
export const PREVIOUS = 'jeoparity/wizard/PREVIOUS'
export const SET_STEPS = 'jeoparity/wizard/SET_STEPS'

export interface IWizardState {
  steps: number
  current: number
}
