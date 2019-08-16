import React from 'react'
import { useTransition, animated } from 'react-spring'
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
  const transitions = useTransition(teams, team => team.id, {
    from: { transform: 'translate3d(0,100%,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,100%,0)' },
  })
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.TeamFooter}>
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div style={props} className={Styles.FooterItem} key={key}>
              <div className={Styles.ItemName}>{item.name}</div>
              <div className={Styles.ItemScore}>50000</div>
            </animated.div>
          )
        })}
      </div>
    </div>
  )
}

export default TeamFooter
