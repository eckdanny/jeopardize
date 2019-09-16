import React from 'react'
import cn from 'classnames'
import { useTransition, animated } from 'react-spring'
import { ITeam } from './modules/teams/teamsTypes'
import { useSelector } from 'react-redux'
import { AppState, selectGame } from './reducers'

import Styles from './TeamFooter.module.css'

interface ITeamVM extends ITeam {
  score: number
  hasControl: boolean
}

type TeamFooterProps = {
  showScoreMutators?: boolean
  onAdd?: (teamId: ITeam['id']) => void
  onSubtract?: (teamId: ITeam['id']) => void
}

const TeamFooter: React.FC<TeamFooterProps> = props => {
  const teams = useSelector((state: AppState) => state.teams)
  const game = useSelector(selectGame)
  console.log(game)
  const transitions = useTransition(teams, team => team.id, {
    from: { transform: 'translate3d(0,100%,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,100%,0)' },
  })
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.TeamFooter}>
        {transitions.map(({ item, props: aProps, key }) => {
          return (
            <animated.div
              style={aProps}
              className={Styles.FooterItem}
              key={key}
            >
              <div className={Styles.ItemNameWrapper}>
                <button
                  className={cn(Styles.ScoreButton, {
                    [Styles.dnone]: !props.showScoreMutators,
                  })}
                  onClick={() => props.onSubtract!(item.id)}
                >
                  -
                </button>
                <div className={Styles.ItemName}>{item.name}</div>
                <button
                  className={cn(Styles.ScoreButton, {
                    [Styles.dnone]: !props.showScoreMutators,
                  })}
                  onClick={() => props.onAdd!(item.id)}
                >
                  +
                </button>
              </div>
              <div className={Styles.ItemScore}>50000</div>
            </animated.div>
          )
        })}
      </div>
    </div>
  )
}

TeamFooter.defaultProps = {
  showScoreMutators: true,
  onAdd: () => {},
  onSubtract: () => {},
}

export default TeamFooter
