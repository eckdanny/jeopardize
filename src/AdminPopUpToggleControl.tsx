import React, { useCallback } from 'react'
import { getIsVisible, action } from './modules/admin'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { Match } from '@reach/router'
import { AppState } from './reducers'

type AdminPopUpToggleControlProps = {}

const selectIsVisible = createSelector(
  (state: AppState) => state.admin,
  getIsVisible
)

const AdminPopUpToggleControl: React.FC<AdminPopUpToggleControlProps> = () => {
  const isVisible = useSelector(selectIsVisible)
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch(action.toggleAdmin())
  }, [dispatch])
  return (
    <Match path="/game">
      {({ match }) => {
        if (!match) return null
        return (
          <>
            Admin Ctrls?
            <button onClick={handleClick}>
              {isVisible ? 'Turn Off' : 'Turn On'}
            </button>
          </>
        )
      }}
    </Match>
  )
}

export default AdminPopUpToggleControl
