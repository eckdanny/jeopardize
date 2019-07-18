import { IContent } from './'
import uuid from 'uuid'

interface ParsedContent {
  id: string
  name: string
  categories: Array<{
    id: string
    name: string
    questions: Array<{
      id: string
      content: string
      value?: number
    }>
  }>
}

export function parseContent(raw: IContent): ParsedContent {
  return {
    id: uuid(),
    name: raw.name,
    categories: raw.categories.map(category => ({
      id: uuid(),
      name: category.name,
      questions: category.questions.map((question, i) => ({
        id: uuid(),
        content: question,
        value: i,
      })),
    })),
  }
}
