import React from 'react'
import ActiveGame from './ActiveGame'
import TeamFooter from './TeamFooter'
import { RouteComponentProps } from '@reach/router'
import Styles from './GameShell.module.css'

type GameShellProps = {} & RouteComponentProps

const GameShell: React.FC<GameShellProps> = () => {
  return (
    <div className={Styles.GameShell}>
      <ActiveGame />
      <TeamFooter />
    </div>
  )
}

export default GameShell
