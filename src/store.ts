import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers()
  //   applyMiddleware(...middleware),
  // other store enhancers if any
)

export default store
