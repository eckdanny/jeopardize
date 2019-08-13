import React from 'react'
import { Router } from '@reach/router'
import Header from '../../Header'
import Styles from './Layouts.module.css'

type MainProps = {
  header: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children, header }) => {
  return (
    <div className={Styles.App}>
      {header}
      <div className={Styles.AppMain}>
        <div className={Styles.AppMain__HeaderGhost} />
        <Router className={Styles.ActiveRoute}>{children}</Router>
      </div>
    </div>
  )
}

export default Main
