import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import Styles from './ActiveQuestion.module.css'

type ActiveQuestionProps = {
  from: DOMRect | any
  to: DOMRect | any
  onClose: () => void
}

const ActiveQuestion: React.FC<ActiveQuestionProps> = props => {
  const scaleX = props.from.width / props.to.width
  const scaleY = props.from.height / props.to.height
  const offsetX = props.from.left - props.to.left
  const offsetY = props.from.top - props.to.top
  const animatedStyle = useSpring({
    config: {
      ...config.stiff,
      clamp: true,
    },
    from: {
      transform: `
        translate(${offsetX}px, ${offsetY}px)
        scaleX(${scaleX})
        scaleY(${scaleY})
      `,
    },
    to: {
      transform: 'translate(0, 0) scaleX(1) scaleY(1)',
      height: props.to.height,
    },
  })
  return (
    <animated.div style={animatedStyle} className={Styles.ActiveQuestion}>
      <button className={Styles.CloseButton} onClick={props.onClose}>
        X
      </button>
      <animated.div className={Styles.Text}>{props.children}</animated.div>
    </animated.div>
  )
}

export default ActiveQuestion
