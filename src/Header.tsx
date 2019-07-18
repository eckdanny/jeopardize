import React, { useCallback } from 'react'
import { Link, Router } from '@reach/router'
import AdminPopUpToggleControl from './AdminPopUpToggleControl'
import styles from './Header.module.css'

type HeaderProps = {}

const isGameInPregress = true

const Header: React.FC<HeaderProps> = () => {
  const handleNavigation = useCallback((e: React.SyntheticEvent) => {
    const proceed = window.confirm(
      `It looks like you have a game in progress. Are you sure you want to abandon it?`
    )
    if (!proceed) e.preventDefault()
  }, [])
  return (
    <div className={styles.Header}>
      <Link to="/" className={styles.Header__Brand} onClick={handleNavigation}>
        JeoParity
      </Link>
      <div>
        <Link to="/game">Game</Link>
        <AdminPopUpToggleControl />
      </div>
    </div>
  )
}

export default Header
