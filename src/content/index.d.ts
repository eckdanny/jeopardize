export interface IContent {
  id?: string
  name: string
  categories: Array<{
    name: string
    questions: Array<{
      id: string
      value: string
    }>
  }>
}

declare const content: IContent[]
export default content
module.exports = content
