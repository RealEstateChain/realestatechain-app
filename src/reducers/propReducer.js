const propInitialState = {
  id: '101',
  title: '',
  address: '',
  extra: '',
  price: '',
	images: [
		"https://media.architecturaldigest.com/photos/5ae77bc796f061514d5668e7/4:3/w_670/315470384.jpg",
	],
  floorplans: [],
  contract: null
};

const propReducer = (state = propInitialState, action) => {

  if (action.type === 'ADD_IMAGE')
  {
    return {
      ...state,
      images: [ 
        ...state.images, 
        action.payload 
      ]
    }
  }
  if (action.type === 'SET_TITLE')
  {
    return {
      ...state,
      title: action.payload 
    }
  }
  if (action.type === 'SET_ADDRESS')
  {
    return {
      ...state,
      address: action.payload 
    }
  }
  if (action.type === 'SET_PRICE')
  {
    return {
      ...state,
      price: action.payload 
    }
  }
  if (action.type === 'SET_EXTRA')
  {
    return {
      ...state,
      extra: action.payload 
    }
  }
  if (action.type === 'SET_CONTRACT_ADDRESS')
  {
    return {
      ...state,
      contract: action.payload 
    }
  }
  if (action.type === 'ADD_FLOORPLAN')
  {
    return {
      ...state,
      floorplans: [ 
        ...state.floorplans, 
        action.payload 
      ]
    }
  }

  return state
};

export default propReducer;