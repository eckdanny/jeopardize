import React, { useCallback, useRef, SyntheticEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from './reducers'
import { addTeam, removeTeam } from './modules/teams/teamsActions'
import { ITeam } from './modules/teams/teamsTypes'

type CreateTeamsProps<T = {}> = {} & T

const validateName = (name: string, teams: ITeam[]) => {
  let err = false
  if (!name) return 'Required!'
  if (teams.find(team => team.name === name)) return 'Already Exists!'
  return err
}

const CreateTeams: React.FC<CreateTeamsProps> = props => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Add Team</label>
          <input type="text" ref={inputEl} />
        </div>
      </form>
      {teams.length ? (
        <ul>
          {teams.map(team => (
            <li key={team.id}>
              <div>
                {team.name}
                <button onClick={() => handleRemove(team.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>NO TEAMS YET!</div>
      )}
    </div>
  )
}

export default CreateTeams
