import React from 'react'
import Styles from './ActiveGame.module.css'
import cx from 'classnames'
import bar, { IContent } from './content'

const vm = viewModel(bar[0])

console.log(vm)

type ActiveGameProps = {}

const ActiveGame: React.FC<ActiveGameProps> = () => {
  return (
    <>
      <div>
        <div className={cx(Styles.GridContainer)}>
          {bar[0].categories.map((category, i) => {
            return (
              <div key={i} className={cx(Styles.Item, Styles.HeaderItem)}>
                {category.name}
              </div>
            )
          })}
          {vm.questions.map((d, i) => (
            <div key={i} className={cx(Styles.Item)}>
              ${d.value}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ActiveGame

function viewModel(
  content: IContent
): {
  categories: IContent['categories']
  questions: Array<any>
} {
  const nCols = content.categories.length
  let nRows = 0
  content.categories.forEach(
    category =>
      (nRows =
        category.questions.length > nRows ? category.questions.length : nRows)
  )
  const questions = []

  for (let j = 0; j < nRows; j++) {
    for (let i = 0; i < nCols; i++) {
      const question = content.categories[i].questions[j]
      questions.push({
        question,
        value: (j + 1) * 2 * 100,
      })
    }
  }

  return {
    categories: content.categories,
    questions,
  }
}
