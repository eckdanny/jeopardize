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
            <div className={Styles.FooterItem} key={team.id}>
              <div className={Styles.ItemName}>{team.name}</div>
              <div className={Styles.ItemScore}>50000</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TeamFooter
