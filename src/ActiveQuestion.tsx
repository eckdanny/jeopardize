import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import Styles from './ActiveQuestion.module.css'

type ActiveQuestionProps = {
  from: DOMRect
  to: DOMRect
  onClose: () => void
}

const ActiveQuestion: React.FC<ActiveQuestionProps> = props => {
  const animatedStyle = useSpring({
    config: {
      ...config.stiff,
      clamp: true,
    },
    from: {
      top: props.from.top,
      left: props.from.left,
      height: props.from.height,
      width: props.from.width,
    },
    to: {
      top: props.to.top,
      left: props.to.left,
      height: props.to.height,
      width: props.to.width,
    },
  })
  // something
  return (
    <animated.div className={Styles.ActiveQuestion} style={animatedStyle}>
      <div>THE ACTIVE QUESTION</div>
      <button onClick={props.onClose}>Close</button>
    </animated.div>
  )
}

export default ActiveQuestion
