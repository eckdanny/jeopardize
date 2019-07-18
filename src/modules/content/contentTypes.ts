import { Action } from 'redux'
import { parseContent } from '../../content/utils'

export const SET_CONTENT = 'jeopardize/content/SET_CONTENT'
export const UNSET_CONTENT = 'jeopardize/content/UNSET_CONTENT'

export interface ISetContent extends Action {
  type: typeof SET_CONTENT
  payload: ReturnType<typeof parseContent>
}

export type ContentAction = ISetContent

export type IContentState = null | ReturnType<typeof parseContent>
