import { Reducer } from 'redux'
import { IContentState, ContentAction, SET_CONTENT } from './contentTypes'

const initialState: IContentState = null

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

// Selectors

export const getContent = (state: IContentState) => {
  if (!state) return { categories: [], questions: [] }
  const nCols = state.categories.length
  let nRows = 0
  state.categories.forEach(
    category =>
      (nRows =
        category.questions.length > nRows ? category.questions.length : nRows)
  )
  const questions = []

  for (let j = 0; j < nRows; j++) {
    for (let i = 0; i < nCols; i++) {
      questions.push(state.categories[i].questions[j])
    }
  }

  return {
    categories: state.categories,
    questions,
  }
}
