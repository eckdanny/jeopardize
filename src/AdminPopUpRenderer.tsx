import React, { useCallback, useEffect } from 'react'
import { getIsVisible, action } from './modules/admin'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { AppState } from './reducers'
import AdminPopUpWindow from './AdminPopUpWindow'

type AdminPopUpRendererProps = {}

const selectIsVisible = createSelector(
  (state: AppState) => state.admin,
  getIsVisible
)

const AdminPopUpRenderer: React.FC<AdminPopUpRendererProps> = props => {
  const isVisible = useSelector(selectIsVisible)
  const dispatch = useDispatch()
  const handleUnload = useCallback(() => {
    dispatch(action.hideAdmin())
  }, [dispatch])
  useEffect(() => {
    const handleParentWindowClose = () => {
      handleUnload()
    }
    window.addEventListener('beforeunload', handleParentWindowClose)
    return () => {
      window.removeEventListener('beforeunload', handleParentWindowClose)
    }
  }, [])
  if (!isVisible) return null
  return (
    <AdminPopUpWindow onunload={handleUnload}>
      <h3>HELLO WORLD!!!</h3>
    </AdminPopUpWindow>
  )
}

export default AdminPopUpRenderer
