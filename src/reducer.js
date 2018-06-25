import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
//import { drizzleReducers } from 'drizzle'

import web3Reducer from './util/web3/web3Reducer'
import userReducer from './user/userReducer'
import listingsReducer from './reducers/listingsReducer'
import propReducer from './reducers/propReducer'


const reducer = combineReducers({
  routing: routerReducer,
  web3: web3Reducer,
  user: userReducer,
  prop: propReducer,
  listings: listingsReducer,
})

export default reducer
