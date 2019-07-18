import { ActionCreator } from 'redux'
import { ISetContent, SET_CONTENT } from './contentTypes'

export const foo = () => {}

export const setContent: ActionCreator<ISetContent> = parsedContent => ({
  type: SET_CONTENT,
  payload: parsedContent,
})
