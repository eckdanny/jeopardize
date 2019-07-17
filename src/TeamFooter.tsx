import React from 'react'
import { ITeam } from './modules/teams/teamsTypes'
import { useSelector } from 'react-redux'
import { AppState } from './reducers'
import Styles from './TeamFooter.module.css'

interface ITeamVM extends ITeam {
  score: number
  hasControl: boolean
}

type TeamFooterProps = {}

const TeamFooter: React.FC<TeamFooterProps> = () => {
  const teams = useSelector((state: AppState) => state.teams)
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.TeamFooter}>
        {teams.map(team => {
          return (
            <div className={Styles.TeamFooter__Team} key={team.id}>
              {team.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TeamFooter
