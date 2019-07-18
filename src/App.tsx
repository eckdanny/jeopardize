import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { Router } from '@reach/router'
import store from './store'
import allContent from './content'
import { parseContent } from './content/utils'
import { action as contentAction } from './modules/content'
import GameShell from './GameShell'
import Header from './Header'
import Welcome from './Welcome'
import styles from './App.module.css'
import CreateGame from './CreateGame'
import AdminPopUpRenderer from './AdminPopUpRenderer'

const ContentLoader: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(contentAction.setContent(parseContent(allContent[1])))
  })
  return null
}

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ContentLoader />
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
