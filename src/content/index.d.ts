export interface IContent {
  name: string
  categories: Array<{
    name: string
    questions: Array<string>
  }>
}

declare const allContent: IContent[]
export default allContent
module.exports = allContent
