import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import Styles from './ActiveQuestion.module.css'

type ActiveQuestionProps = {
  from: DOMRect | any
  to: DOMRect | any
  onClose: () => void
}

const ActiveQuestion: React.FC<ActiveQuestionProps> = props => {
  console.log(props)
  const [styleRest, setStyleRest] = useState<React.CSSProperties>()
  const animatedStyle = useSpring({
    config: {
      ...config.stiff,
      clamp: true,
    },
    // immediate: true,
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
    onRest: () => {
      console.log('DO SOMETHING HERE!, like remove absolute positioning')
      setStyleRest({
        position: 'relative',
        top: 'calc(var(--grid-gap) * 2)',
        height: '631px',
      })
    },
  })

  const textStyle = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
  })
  // something
  return (
    <animated.div
      className={Styles.ActiveQuestion}
      style={styleRest || animatedStyle}
    >
      <button className={Styles.CloseButton} onClick={props.onClose}>
        Close
      </button>
      <animated.div className={Styles.Text} style={textStyle}>
        To marry Elizabeth, Prince Philip had to renounce claims to this
        southern European country's crown.
      </animated.div>
    </animated.div>
  )
}

export default ActiveQuestion
