import React, { useCallback, useRef, SyntheticEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from './reducers'
import { addTeam, removeTeam } from './modules/teams/teamsActions'
import { ITeam } from './modules/teams/teamsTypes'
import Styles from './CreateTeams.module.css'

type CreateTeamsProps<T = {}> = {} & T

const validateName = (name: string, teams: ITeam[]) => {
  let err = false
  if (!name) return 'Required!'
  if (teams.find(team => team.name === name)) return 'Already Exists!'
  return err
}

const CreateTeams: React.FC<CreateTeamsProps> = props => {
  const inputId = useRef('HTML_ID_TEAM_INPUT_FORM')
  const teams = useSelector((state: AppState) => state.teams)
  const dispatch = useDispatch()
  const inputEl = useRef<HTMLInputElement>(null!)
  const handleSubmit = useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
      const newTeamName = inputEl.current.value
      if (validateName(newTeamName, teams)) {
        alert('nope')
      } else {
        dispatch(addTeam(inputEl.current.value))
        inputEl.current.value = ''
      }
    },
    [inputEl, teams, dispatch]
  )
  const handleRemove = (id: ITeam['id']) => {
    dispatch(removeTeam(id))
  }
  return (
    <div className={Styles.CreateTeams}>
      <form className={Styles.Form} onSubmit={handleSubmit}>
        <div className={Styles.InputGroup}>
          <input
            id={inputId.current}
            type="text"
            ref={inputEl}
            className={Styles.TeamInput}
          />
          <label htmlFor={inputId.current}>Add Team</label>
        </div>
      </form>
      {teams.length ? (
        <ul className={Styles.TeamList}>
          {teams.map(team => (
            <li key={team.id} className={Styles.TeamListItem}>
              <span className={Styles.Team}>{team.name}</span>
              <button onClick={() => handleRemove(team.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={Styles.EmptyList}>NO TEAMS YET!</div>
      )}
    </div>
  )
}

export default CreateTeams
