import React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'
import ActiveGame from './ActiveGame'
import TeamFooter from './TeamFooter'
import { selectContent } from './reducers'
import Styles from './GameShell.module.css'

type GameShellProps = {} & RouteComponentProps

const GameShell: React.FC<GameShellProps> = () => {
  const content = useSelector(selectContent)
  if (!content) return <div>NO CONTENT. Please Start a new game!</div>
  return (
    <div className={Styles.GameShell}>
      <ActiveGame />
      <TeamFooter />
    </div>
  )
}

export default GameShell
