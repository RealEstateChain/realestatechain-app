import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { drizzleReducers } from 'drizzle'

import web3Reducer from './util/web3/web3Reducer'
import userReducer from './user/userReducer'


const propWalletInitialState = {
	images: [
		"https://media.architecturaldigest.com/photos/5ae77bc796f061514d5668e7/4:3/w_670/315470384.jpg",
	]
};

const propWalletReducer = (state = propWalletInitialState, action) => {

  if (action.type === 'ADD_IMAGE')
  {
    return Object.assign({}, state, {
      images: [ ...state.images, action.payload ]
    })
  }

  return state
};

const reducer = combineReducers({
  routing: routerReducer,
  web3: web3Reducer,
  user: userReducer,
  propWallet: propWalletReducer,
  ...drizzleReducers
})

export default reducer
