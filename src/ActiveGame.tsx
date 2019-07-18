import React, { useRef, useState, useCallback } from 'react'
import {
  useTransition,
  useChain,
  animated,
  ReactSpringHook,
  config,
} from 'react-spring'
import Styles from './ActiveGame.module.css'
import cx from 'classnames'
import bar, { IContent } from './content'
import ActiveQuestion from './ActiveQuestion'

const vm = viewModel(bar[0])

type ActiveGameProps = {}

const animationConfig = {
  ...config.stiff,
  unique: true,
  from: { opacity: 0, transform: 'translate3d(0, 50%, 0)' },
  enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
}

const ActiveGame: React.FC<ActiveGameProps> = () => {
  const [questions, set] = useState<typeof vm.questions>(vm.questions)
  const [activeQuestion, setActiveQuestion] = useState<any>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const handleItemClick = useCallback(
    (e: React.SyntheticEvent) => {
      const from = e.currentTarget.getBoundingClientRect()
      const to = containerRef.current!.getBoundingClientRect()
      console.log([from, to])
      setActiveQuestion({ from, to })
    },
    [containerRef]
  )
  const categoryTransitionRef = useRef<ReactSpringHook>(null)
  const categoryTransitions = useTransition(
    bar[0].categories,
    item => item.name,
    {
      ...animationConfig,
      trail: 500 / bar[0].categories.length,
      ref: categoryTransitionRef,
    }
  )
  const questionTransitionRef = useRef<ReactSpringHook>(null)
  const questionTransitions = useTransition(questions, item => item.question, {
    ...animationConfig,
    // trail: 1000 / vm.questions.length,
    ref: questionTransitionRef,
  })
  useChain([categoryTransitionRef, questionTransitionRef], [0, 1])
  return (
    <div>
      <div
        className={cx(Styles.GridContainer)}
        onClick={() => set(vm.questions)}
        ref={containerRef}
      >
        {categoryTransitions.map(({ item, key, props: animationStyle }) => (
          <animated.div
            key={key}
            className={cx(Styles.HeaderItem)}
            style={animationStyle}
          >
            {item.name}
          </animated.div>
        ))}
        {/* {bar[0].categories.map((category, i) => {
        return (
          <div key={i} className={cx(Styles.Item, Styles.HeaderItem)}>
            {category.name}
          </div>
        )
      })} */}
        {questionTransitions.map(({ item, key, props }) => (
          <animated.div
            key={key}
            style={props}
            className={Styles.Item}
            onClick={handleItemClick}
          >
            {`$${item.value}`}
          </animated.div>
        ))}
      </div>
      {activeQuestion && (
        <ActiveQuestion
          {...activeQuestion}
          onClose={() => setActiveQuestion(false)}
        />
      )}
    </div>
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
