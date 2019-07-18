import React, { useRef, useState, useCallback } from 'react'
import {
  useTransition,
  useChain,
  animated,
  ReactSpringHook,
  config,
  useSpring,
  useSprings,
} from 'react-spring'
import { createSelector } from 'reselect'
import { useSelector, useDispatch } from 'react-redux'
import Styles from './ActiveGame.module.css'
import cx from 'classnames'
import ActiveQuestion from './ActiveQuestion'
import { action } from './modules/game'
import { getContent } from './modules/content'
import { selectContent as rootSelectContent, AppState } from './reducers'

type ActiveGameProps = {}

const animationConfig = {
  ...config.stiff,
  unique: true,
  from: { opacity: 0, transform: 'translate3d(0, 50%, 0)' },
  enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
}

const selectContent = createSelector(
  rootSelectContent,
  getContent
)

const selectActiveQuestionId = createSelector(
  (state: AppState) => state.game,
  state => state.activeQuestionId
)

const ActiveGame: React.FC<ActiveGameProps> = () => {
  const dispatch = useDispatch()
  const content = useSelector(selectContent)
  const activeQuestionId = useSelector(selectActiveQuestionId)
  // const [activeQuestion, setActiveQuestion] = useState<any>(false)
  const cardMap = useRef<{ [K: string]: HTMLDivElement | null }>({})
  const containerRef = useRef<HTMLDivElement>(null)
  // const handleItemClick = useCallback(
  //   (e: React.SyntheticEvent) => {
  //     console.log(cardMap.current)
  //     const from = e.currentTarget.getBoundingClientRect()
  //     const to = containerRef.current!.getBoundingClientRect()
  //     console.log([from, to])
  //     setActiveQuestion({ from, to })
  //   },
  //   [containerRef]
  // )
  const handleItemClick = useCallback(
    (questionId: string) => {
      dispatch(action.setActiveQuestion(questionId))
    },
    [containerRef, cardMap]
  )
  const categoryTransitionRef = useRef<ReactSpringHook>(null)
  const categoryTransitions = useTransition(
    content.categories,
    item => item.id,
    {
      ...animationConfig,
      trail: 500 / content.categories.length,
      ref: categoryTransitionRef,
    }
  )
  const questionTransitionRef = useRef<ReactSpringHook>(null)
  const questionTransitions = useTransition(
    content.questions,
    item => item.id,
    {
      ...animationConfig,
      delay: 750,
      ref: questionTransitionRef,
      reset: true,
    }
  )
  useChain([categoryTransitionRef, questionTransitionRef], [0, 0.75])
  if (!content.questions.length) return null
  return (
    <div>
      <div className={cx(Styles.GridContainer)} ref={containerRef}>
        {categoryTransitions.map(({ item, key, props: animationStyle }) => (
          <animated.div
            key={key}
            className={cx(Styles.HeaderItem)}
            style={animationStyle}
          >
            {item.name}
          </animated.div>
        ))}

        {questionTransitions.map(({ item, key, props }) => (
          <animated.div
            key={key}
            style={props}
            className={Styles.Item}
            // onClick={handleItemClick}
            onClick={() => handleItemClick(item.id)}
            ref={el => (cardMap.current[item.id] = el)}
          >
            {'undefined' !== typeof item.value && `$${(item.value + 1) * 200}`}
          </animated.div>
        ))}
      </div>
      {/* {activeQuestion && (
        <ActiveQuestion
          {...activeQuestion}
          onClose={() => setActiveQuestion(false)}
        />
      )} */}
      {activeQuestionId && (
        <ActiveQuestion
          from={cardMap.current[activeQuestionId]!.getBoundingClientRect()}
          to={containerRef.current!.getBoundingClientRect()}
          onClose={() => dispatch(action.closeActiveQuestion())}
        />
      )}
    </div>
  )
}

export default ActiveGame
