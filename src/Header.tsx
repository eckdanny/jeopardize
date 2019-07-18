import React, { useCallback } from 'react'
import { Link, Router } from '@reach/router'
import AdminPopUpToggleControl from './AdminPopUpToggleControl'
import styles from './Header.module.css'

const PROMPT_CONFIRM_NAVIGATION = `It looks like you have a game in progress. Are you sure you want to abandon it?`

type HeaderProps = {}

const isGameInPregress = false

const Header: React.FC<HeaderProps> = () => {
  const handleNavigation = useCallback((e: React.SyntheticEvent) => {
    if (isGameInPregress) {
      const proceed = window.confirm(PROMPT_CONFIRM_NAVIGATION)
      if (!proceed) e.preventDefault()
    }
  }, [])
  return (
    <div className={styles.Header}>
      <Link to="/" className={styles.Header__Brand} onClick={handleNavigation}>
        Jeopardize.it
      </Link>
      <div>
        <Link to="/game">Game</Link>
        <AdminPopUpToggleControl />
      </div>
    </div>
  )
}

export default Header
