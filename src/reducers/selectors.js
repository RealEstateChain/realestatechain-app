import state from '../reducer'

export const getNewFile = (state) => state.media.new

export const getUserId = (state) => state.user.id
export const getPropId = (state) => state.prop.id
export const getCachedFile = (state, uri) => {
  return state.cache[uri]
}

export const getUserAccount = (state) => state.web3.accounts[0]
