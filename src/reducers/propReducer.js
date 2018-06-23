const propInitialState = {
  id: '101',
	images: [
		"https://media.architecturaldigest.com/photos/5ae77bc796f061514d5668e7/4:3/w_670/315470384.jpg",
	]
};

const propReducer = (state = propInitialState, action) => {

  if (action.type === 'ADD_FILE')
  {
    return Object.assign({}, state, {
      images: [ ...state.images, action.payload ]
    })
  }

  return state
};

export default propReducer;