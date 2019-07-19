import React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
import store from './store'
import GameShell from './GameShell'
import Header from './Header'
import Welcome from './Welcome'
import CreateGame from './CreateGame'
import AdminPopUpRenderer from './AdminPopUpRenderer'
import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AdminPopUpRenderer />
      <div className={styles.App}>
        <Header />
        <div className={styles.AppMain}>
          <Router className={styles.ActiveRoute}>
            <Welcome path="/" />
            <CreateGame path="/new" />
            <GameShell path="/game" />
          </Router>
        </div>
      </div>
    </Provider>
  )
}

export default App
