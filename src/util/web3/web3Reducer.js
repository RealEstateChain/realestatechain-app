const initialState = {
  web3Instance: null,
  accounts: []
}

const web3Reducer = (state = initialState, action) => {
  if (action.type === 'WEB3_INITIALIZED')
  {
    return Object.assign({}, state, {
      web3Instance: action.payload.web3Instance
    })
  }

  if (action.type === 'SET_ACCOUNTS')
  {
    return Object.assign({}, state, {
      accounts: action.payload
    })
  }

  return state
}

export default web3Reducer
