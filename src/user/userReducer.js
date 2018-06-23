const initialState = {
  id: '0x23232323232323',
  data: null,
  walletProgress: 5,
  uploadedPhotos: false,
  uploadedFloorplan: false,
  verified: true,
  uploadedPropData: true,
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
      walletProgress: state.walletProgress + action.payload
    })
  }

  if (action.type === 'COMPLETE_TASK')
  {
    return Object.assign({}, state, {
      [action.payload]: true
    })
  }

  return state
}

export default userReducer
