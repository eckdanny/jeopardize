import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import { useSpring, animated } from 'react-spring'
import styles from './Welcome.module.css'

type WelcomeProps = RouteComponentProps & {
  onNext?: () => void
}

const Welcome: React.FC<WelcomeProps> = props => {
  const animatedStyles = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return (
    <animated.div className={styles.Welcome} style={animatedStyles}>
      <h3 className={styles.FancyMessage}>Welcome!</h3>
      <p>Let's play a game!</p>
      <Link className={styles.StartNewGameButton} to="/new">
        New
      </Link>
    </animated.div>
  )
}

Welcome.defaultProps = {
  onNext: () => {},
}

export default Welcome
