import React from 'react'
import Wizard from './Wizard'
import BoardSelect from './BoardSelect'
import CreateTeams from './CreateTeams'
import StartGame from './StartGame'
import TeamFooter from './TeamFooter'
import { RouteComponentProps, Router, Link } from '@reach/router'
import { parse } from 'query-string'

type CreateGameProps = {} & RouteComponentProps

const Step0: React.FC<RouteComponentProps> = () => <div>Step 0</div>
const Step1: React.FC<RouteComponentProps> = () => <div>Step 1</div>
const Step2: React.FC<RouteComponentProps> = () => <div>Step 2</div>

const PATHS = {
  TEAMS: 'teams',
  TOPIC: 'topic',
}

const CreateGame: React.FC<CreateGameProps> = ({ path, location }) => {
  const currentStep = parse(location!.search).step || 0
  return (
    <div>
      <h3>New Game...</h3>
      <ul>
        <li>
          <Link to="./">Start</Link>
        </li>
        <li>
          <Link to="?step=1">Step 1</Link>
        </li>
        <li>
          <Link to="?step=2">Step 2</Link>
        </li>
      </ul>
      {(() => {
        switch (currentStep) {
          case '1':
            return <BoardSelect />
          case '2':
            return <CreateTeams />
          default:
            return null
        }
      })()}
    </div>
  )
}

export default CreateGame
