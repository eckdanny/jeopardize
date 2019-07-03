import React, { useCallback, useRef, SyntheticEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { AppState } from './reducers'
import { toggleAdmin } from './modules/admin/adminActions'
import { addTeam } from './modules/teams/teamsActions'

type CreateTeamsProps<T = {}> = {} & T

const CreateTeams: React.FC<CreateTeamsProps> = props => {
  const teams = useSelector((state: AppState) => state.teams)
  const dispatch = useDispatch()
  const inputEl = useRef<HTMLInputElement>(null!)
  const handleSubmit = useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
      const newTeam = inputEl.current.value
      if (teams.find(({ name }) => name === newTeam)) {
        alert('already taken')
      } else {
        dispatch(addTeam(inputEl.current.value))
      }
    },
    [inputEl, teams]
  )
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
              <div>{team.name}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>NO TEAMS YET!</div>
      )}
      <button>next</button>
    </div>
  )
}

// const CreateTeams: React.FC<CreateTeamsProps> = props => {
//   const isVisible = useSelector(selectIsVisible)
//   const dispatch = useDispatch()
//   const handleToggle = useCallback(() => dispatch(toggleAdmin()), [dispatch])
//   return (
//     <div>
//       alksdfjlkj
//       <p>isVisible: {isVisible ? 'YES' : 'NO'}</p>
//       <button onClick={handleToggle}>Toggle Me</button>
//     </div>
//   )
// }

export default CreateTeams
