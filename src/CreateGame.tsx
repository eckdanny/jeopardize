import React from 'react'
import Wizard from './Wizard'
import BoardSelect from './BoardSelect'
import CreateTeams from './CreateTeams'
import StartGame from './StartGame'
import TeamFooter from './TeamFooter'
import { RouteComponentProps } from '@reach/router'

type CreateGameProps = {} & RouteComponentProps

const CreateGame: React.FC<CreateGameProps> = () => {
  return (
    <>
      <Wizard steps={[<BoardSelect />, <CreateTeams />, <StartGame />]} />
      <TeamFooter />
    </>
  )
}

export default CreateGame
