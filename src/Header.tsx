import React from 'react'
import { Link, Router } from '@reach/router'
import AdminPopUpToggleControl from './AdminPopUpToggleControl'
import styles from './Header.module.css'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Link to="/" className={styles.Header__Brand}>
        JeoParity
      </Link>
      <Link to="/new">New</Link>
      <Link to="/game">Game</Link>
      <AdminPopUpToggleControl />
    </div>
  )
}

export default Header
