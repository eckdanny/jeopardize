import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { AppState } from './reducers'
import { toggleAdmin } from './modules/admin/adminActions'

type CreateTeamsProps<T = {}> = {
  teams?: []
} & T

const selectIsVisible = createSelector(
  (state: AppState) => state.admin,
  admin => admin.isVisible
)

const CreateTeams: React.FC<CreateTeamsProps> = props => {
  const isVisible = useSelector(selectIsVisible)
  const dispatch = useDispatch()
  const handleToggle = useCallback(() => dispatch(toggleAdmin()), [dispatch])
  return (
    <div>
      alksdfjlkj
      <p>isVisible: {isVisible ? 'YES' : 'NO'}</p>
      <button onClick={handleToggle}>Toggle Me</button>
    </div>
  )
}

export default CreateTeams
