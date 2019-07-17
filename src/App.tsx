import React, { useState, useReducer } from 'react'
import { Provider } from 'react-redux'
import { Router, RouteComponentProps } from '@reach/router'
import NewWindow from 'react-new-window'
import store from './store'
import GameShell from './GameShell'
import Header from './Header'
import styles from './App.module.css'
import CreateGame from './CreateGame'
import AdminPopUpRenderer from './AdminPopUpRenderer'

const Welcome: React.FC<{} & RouteComponentProps> = () => <div>WELCOME</div>

const App: React.FC = () => {
  return (
    <Provider store={store}>
      {/* <NewWindow name="Admin Controls">
        <h3>Hello World!</h3>
      </NewWindow> */}
      <AdminPopUpRenderer />
      <div className={styles.App}>
        <Header />
        <div className={styles.AppMain}>
          <Router>
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
