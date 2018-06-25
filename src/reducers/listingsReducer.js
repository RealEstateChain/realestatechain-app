const listingsInitialState = {
	matches: [
	  {
	    "id": 0,
	    "name": "House 1",
	    "picture": "assets/img/properties/house1.jpeg",
	    "age": 3,
	    "locality": "Lisco",
			"location": "Alabama",
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
			"location": "West Virginia",
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
			"location": "Idaho",
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
			"location": "Pennsylvania",
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
			"location": "South Dakota",
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
			"location": "Illinois",
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
			"location": "Louisiana",
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
			"location": "Hawaii",
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
			"location": "Utah",
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
			"location": "Indiana",
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
			"location": "Montana",
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

export default listingsReducer;