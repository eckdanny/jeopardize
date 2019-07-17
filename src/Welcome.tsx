import React from 'react'

type WelcomeProps = {
  onNext?: () => void
}

const Welcome: React.FC<WelcomeProps> = props => {
  // stuff...
  return (
    <div>
      <h3 style={{ color: 'var(--color-yellow)' }}>Welcome!</h3>
      <p>Let's play a game...</p>
    </div>
  )
}

Welcome.defaultProps = {
  onNext: () => {},
}

export default Welcome
