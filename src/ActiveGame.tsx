import React, { useRef, useCallback, useLayoutEffect, useState } from 'react'
import {
  useTransition,
  useChain,
  animated,
  ReactSpringHook,
  config,
} from 'react-spring'
import { createSelector } from 'reselect'
import { useSelector, useDispatch } from 'react-redux'
import Styles from './ActiveGame.module.css'
import cx from 'classnames'
import ActiveQuestion from './ActiveQuestion'
import { action } from './modules/game'
import { getContent } from './modules/content'
import { selectContent as rootSelectContent, AppState } from './reducers'
import { RouteComponentProps } from '@reach/router'
import TeamFooter from './TeamFooter'

type ActiveGameProps = {} & RouteComponentProps

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
  const cardMap = useRef<{ [K: string]: HTMLDivElement | null }>({})
  const containerRef = useRef<HTMLDivElement>(null!)
  const [containerBounds, setContainerBounds] = useState<ClientRect | DOMRect>(
    undefined!
  )
  const handleItemClick = useCallback(
    (questionId: string) => {
      dispatch(action.setActiveQuestion(questionId))
      setContainerBounds(
        boundingRect(containerRef.current.getBoundingClientRect())
      )
    },
    [dispatch]
  )
  const categoryTransitionRef = useRef<ReactSpringHook>(null!)
  const categoryTransitions = useTransition(
    content.categories,
    item => item.id,
    {
      ...animationConfig,
      trail: 500 / content.categories.length,
      ref: categoryTransitionRef,
    }
  )
  const questionTransitionRef = useRef<ReactSpringHook>(null!)
  const questionTransitions = useTransition(
    content.questions,
    item => item.id,
    {
      ...animationConfig,
      trail: 500 / content.questions.length,
      ref: questionTransitionRef,
      reset: true,
    }
  )
  // useChain([categoryTransitionRef, questionTransitionRef], [0, 1])
  useChain([categoryTransitionRef, questionTransitionRef], [0.5, 1.375])
  useLayoutEffect(() => {
    if (!containerRef.current) return
    setContainerBounds(
      boundingRect(containerRef.current.getBoundingClientRect())
    )
  }, [containerRef, setContainerBounds])
  if (!content.questions.length) return null
  return (
    <>
      <div className={cx(Styles.ActiveGame)}>
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
              onClick={() => handleItemClick(item.id)}
              ref={el => (cardMap.current[item.id] = el)}
            >
              {'undefined' !== typeof item.value &&
                `$${(item.value + 1) * 200}`}
            </animated.div>
          ))}
        </div>
      </div>
      <TeamFooter />
      {activeQuestionId &&
        cardMap.current[activeQuestionId] &&
        containerBounds && (
          <div className={Styles.ModalBackdrop}>
            <div className={Styles.ModalGrid}>
              <ActiveQuestion
                from={boundingRect(
                  cardMap.current[activeQuestionId]!.getBoundingClientRect()
                )}
                to={containerBounds}
                onClose={() => dispatch(action.closeActiveQuestion())}
              >
                {
                  content.questions.find(d => d.id === activeQuestionId)!
                    .content
                }
              </ActiveQuestion>
            </div>
          </div>
        )}
    </>
  )
}

export default ActiveGame

//
// Helpers
//

function boundingRect(
  rect: ClientRect
): Pick<ClientRect, 'bottom' | 'height' | 'left' | 'right' | 'top' | 'width'> {
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width,
  }
}
