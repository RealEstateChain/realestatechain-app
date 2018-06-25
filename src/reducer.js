import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
//import { drizzleReducers } from 'drizzle'

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

const listingsInitialState = {
	matches: [
	  {
	    "id": 0,
	    "name": "House 1",
	    "picture": "assets/img/properties/house1.jpeg",
	    "age": 3,
	    "locality": "Lisco",
			"location": "AL",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  },
	  {
	    "id": 1,
	    "name": "House 2",
	    "picture": "assets/img/properties/house1.jpeg",
	    "age": 3,
	    "locality": "Tooleville",
			"location": "WV",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  },
	  {
	    "id": 2,
	    "name": "House 3",
	    "picture": "assets/img/properties/house2.jpeg",
	    "age": 2,
	    "locality": "Freeburn",
			"location": "ID",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  },
	  {
	    "id": 3,
	    "name": "House 4",
	    "picture": "assets/img/properties/house3.jpeg",
	    "age": 2,
	    "locality": "Camas",
			"location": "PE",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  },
	  {
	    "id": 4,
	    "name": "House 5",
	    "picture": "assets/img/properties/house2.jpeg",
	    "age": 2,
	    "locality": "Gerber",
			"location": "SD",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  },
	  {
	    "id": 5,
	    "name": "House 6",
	    "picture": "assets/img/properties/house2.jpeg",
	    "age": 3,
	    "locality": "Innsbrook",
			"location": "IL",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  },
	  {
	    "id": 6,
	    "name": "House 7",
	    "picture": "assets/img/properties/house4.jpeg",
	    "age": 3,
	    "locality": "Soudan",
			"location": "LA",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  },
	  {
	    "id": 7,
	    "name": "House 8",
	    "picture": "assets/img/properties/house4.jpeg",
	    "age": 3,
	    "locality": "Jacksonwald",
			"location": "Palau",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  },
	  {
	    "id": 8,
	    "name": "House 9",
	    "picture": "assets/img/properties/house2.jpeg",
	    "age": 2,
	    "locality": "Honolulu",
			"location": "HI",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  },
	  {
	    "id": 9,
	    "name": "House 10",
	    "picture": "assets/img/properties/house3.jpeg",
	    "age": 3,
	    "locality": "Mathen",
			"location": "UT",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  },
	  {
	    "id": 10,
	    "name": "House 11",
	    "picture": "assets/img/properties/house3.jpeg",
	    "age": 2,
	    "locality": "Tyhee",
			"location": "IN",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  },
	  {
	    "id": 11,
	    "name": "House 12",
	    "picture": "assets/img/properties/house1.jpeg",
	    "age": 3,
	    "locality": "Windsor",
			"location": "MO",
			"descriptionShort": "3BR 2BA, 1650sqft.",
			"price": 350000,
			"source": "New Construction", 
	  }
	]
};

const listingsReducer = (state = listingsInitialState, action) => {

  if (action.type === 'GOT_LISTINGS')
  {
    return Object.assign({}, state, {
      matches: [ action.payload ]
    })
  }

  return state
};


const reducer = combineReducers({
  routing: routerReducer,
  web3: web3Reducer,
  user: userReducer,
  propWallet: propWalletReducer,
  listings: listingsReducer,
})

export default reducer
