import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import styles from './Welcome.module.css'

type WelcomeProps = RouteComponentProps & {
  onNext?: () => void
}

const Welcome: React.FC<WelcomeProps> = props => {
  return (
    <div className={styles.Welcome}>
      <h3 className={styles.FancyMessage}>Welcome!</h3>
      <p>Let's play a game!</p>
      <Link className={styles.StartNewGameButton} to="/new">
        New
      </Link>
    </div>
  )
}

Welcome.defaultProps = {
  onNext: () => {},
}

export default Welcome
