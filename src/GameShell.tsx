import React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'
import ActiveGame from './ActiveGame'
import TeamFooter from './TeamFooter'
import { selectContent } from './reducers'
import Styles from './GameShell.module.css'

type GameShellProps = {} & RouteComponentProps

// const GameShell: React.FC<GameShellProps> = () => {
//   const content = useSelector(selectContent)
//   if (!content) return <div>NO CONTENT. Please Start a new game!</div>
//   return (
//     <div className={Styles.GameShell}>
//       {/* <ActiveGame /> */}
//       {/* <TeamFooter /> */}
//     </div>
//   )
// }

const GameShell: React.FC<GameShellProps> = () => {
  return <ActiveGame />
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.Main}>
        <div className={Styles.Inner} style={{ margin: '2rem auto' }}>
          <ActiveGame />
        </div>
      </div>
      <div className={Styles.Footer}>
        <div className={Styles.Inner}>alksdj</div>
      </div>
    </div>
  )
}

export default GameShell
