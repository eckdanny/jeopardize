import { ActionCreator } from 'redux'
import { ActionTypes, SAY_HI, SAY_BYE, SAY_SOMETHING } from './types'

export const sayHi: ActionCreator<ActionTypes> = () => {
  return { type: SAY_HI }
}

export const sayBye: ActionCreator<ActionTypes> = () => {
  return {
    type: SAY_BYE,
  }
}

export const saySomething: ActionCreator<ActionTypes> = (message: string) => {
  return {
    type: SAY_SOMETHING,
    payload: message,
  }
}
