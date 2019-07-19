import React, { useCallback, useEffect, Children } from 'react'
import { getIsVisible, action } from './modules/admin'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { selectAdmin } from './reducers'
import AdminPopUpWindow from './AdminPopUpWindow'

type AdminPopUpRendererProps = {}

const selectIsVisible = createSelector(
  selectAdmin,
  getIsVisible
)

const AdminPopUpRenderer: React.FC<AdminPopUpRendererProps> = props => {
  const isVisible = useSelector(selectIsVisible)
  const dispatch = useDispatch()
  const handleUnload = useCallback(() => {
    if (isVisible) dispatch(action.hideAdmin())
  }, [dispatch])
  useEffect(() => {
    const handleParentWindowClose = () => {
      handleUnload()
    }
    window.addEventListener('beforeunload', handleParentWindowClose)
    return () => {
      window.removeEventListener('beforeunload', handleParentWindowClose)
    }
  }, [handleUnload])
  if (!isVisible) return null
  return (
    <AdminPopUpWindow onunload={handleUnload}>
      {props.children}
    </AdminPopUpWindow>
  )
}

export default AdminPopUpRenderer
