import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
// import './App.css'
import CreateTeams from './CreateTeams'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <CreateTeams teams={[]} />
      </div>
    </Provider>
  )
}

export default App
