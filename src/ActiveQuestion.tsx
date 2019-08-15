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
  // const animatedStyle = useSpring({
  //   config: {
  //     ...config.stiff,
  //     clamp: true,
  //   },
  //   // immediate: true,
  //   from: {
  //     top: props.from.top,
  //     left: props.from.left,
  //     height: props.from.height,
  //     width: props.from.width,
  //   },
  //   to: {
  //     top: props.to.top,
  //     left: props.to.left,
  //     height: props.to.height,
  //     width: props.to.width,
  //   },
  //   onRest: () => {
  //     console.log('DO SOMETHING HERE!, like remove absolute positioning')
  //     setStyleRest({
  //       position: 'relative',
  //       top: 'calc(var(--grid-gap) * 2)',
  //       height: '631px',
  //     })
  //   },
  // })

  // const textStyle = useSpring({
  //   from: { transform: 'scale(0)' },
  //   to: { transform: 'scale(1)' },
  // })
  // something

  const scaleX = props.from.width / props.to.width
  const scaleY = props.from.height / props.to.height
  // const offsetX = props.from.left - props.to.left
  const offsetX =
    props.from.left +
    props.from.width / 2 -
    (props.to.left + props.to.width / 2)
  const offsetY = props.to.top - props.from.top
  const animatedStyle = useSpring({
    config: {
      ...config.stiff,
      clamp: true,
    },
    from: {
      transform: `
        scaleX(${scaleX})
        scaleY(${scaleY})
        /* translate(${offsetX}px, ${offsetY}px) */
      `,
      // top: props.from.top,
      // left: props.from.left,
      // height: props.from.height,
      // width: props.from.width,
    },
    to: {
      transform: 'scaleX(1) scaleY(1) translate(0, 0)',
      // top: props.to.top,
      // left: props.to.left,
      height: props.to.height,
      // width: props.to.width,
    },
  })
  return (
    <animated.div style={animatedStyle} className={Styles.ActiveQuestion}>
      {/* style={styleRest || animatedStyle} */}
      <button className={Styles.CloseButton} onClick={props.onClose}>
        X
      </button>
      <animated.div className={Styles.Text}>{props.children}</animated.div>
    </animated.div>
  )
}

export default ActiveQuestion
