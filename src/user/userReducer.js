const initialState = {
  data: null,
  walletProgress: 5
}

const userReducer = (state = initialState, action) => {
  if (action.type === 'USER_LOGGED_IN' || action.type === 'USER_UPDATED')
  {
    return Object.assign({}, state, {
      data: action.payload
    })
  }

  if (action.type === 'USER_LOGGED_OUT')
  {
    return Object.assign({}, state, {
      data: null
    })
  }

  if (action.type === 'UPDATE_WALLET_PROGRESS')
  {
    return Object.assign({}, state, {
      walletProgress: state.walletProgress + action.payload.increment
    })
  }

  return state
}

export default userReducer
