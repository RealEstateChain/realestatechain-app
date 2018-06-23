const listingsInitialState = {
	matches: [
	  {
	    "id": 0,
	    "name": "House 1",
	    "picture": "assets/img/properties/house1.jpeg",
	    "age": 3,
	    "locality": "Lisco",
	    "location": "Alabama"
	  },
	  {
	    "id": 1,
	    "name": "House 2",
	    "picture": "assets/img/properties/house1.jpeg",
	    "age": 3,
	    "locality": "Tooleville",
	    "location": "West Virginia"
	  },
	  {
	    "id": 2,
	    "name": "House 3",
	    "picture": "assets/img/properties/house2.jpeg",
	    "age": 2,
	    "locality": "Freeburn",
	    "location": "Idaho"
	  },
	  {
	    "id": 3,
	    "name": "House 4",
	    "picture": "assets/img/properties/house3.jpeg",
	    "age": 2,
	    "locality": "Camas",
	    "location": "Pennsylvania"
	  },
	  {
	    "id": 4,
	    "name": "House 5",
	    "picture": "assets/img/properties/house2.jpeg",
	    "age": 2,
	    "locality": "Gerber",
	    "location": "South Dakota"
	  },
	  {
	    "id": 5,
	    "name": "House 6",
	    "picture": "assets/img/properties/house2.jpeg",
	    "age": 3,
	    "locality": "Innsbrook",
	    "location": "Illinois"
	  },
	  {
	    "id": 6,
	    "name": "House 7",
	    "picture": "assets/img/properties/house4.jpeg",
	    "age": 3,
	    "locality": "Soudan",
	    "location": "Louisiana"
	  },
	  {
	    "id": 7,
	    "name": "House 8",
	    "picture": "assets/img/properties/house4.jpeg",
	    "age": 3,
	    "locality": "Jacksonwald",
	    "location": "Palau"
	  },
	  {
	    "id": 8,
	    "name": "House 9",
	    "picture": "assets/img/properties/house2.jpeg",
	    "age": 2,
	    "locality": "Honolulu",
	    "location": "Hawaii"
	  },
	  {
	    "id": 9,
	    "name": "House 10",
	    "picture": "assets/img/properties/house3.jpeg",
	    "age": 3,
	    "locality": "Mathen",
	    "location": "Utah"
	  },
	  {
	    "id": 10,
	    "name": "House 11",
	    "picture": "assets/img/properties/house3.jpeg",
	    "age": 2,
	    "locality": "Tyhee",
	    "location": "Indiana"
	  },
	  {
	    "id": 11,
	    "name": "House 12",
	    "picture": "assets/img/properties/house1.jpeg",
	    "age": 3,
	    "locality": "Windsor",
	    "location": "Montana"
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

export default listingsReducer;