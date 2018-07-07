const listingsInitialState = {
	matches: [
	  {
	    "id": 0,
	    "name": "House 1",
	    "images": ["assets/img/properties/house1.jpeg"],
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
	    "images": ["assets/img/properties/house1.jpeg"],
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
	    "images": ["assets/img/properties/house2.jpeg"],
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
	    "images": ["assets/img/properties/house3.jpeg"],
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
	    "images": ["assets/img/properties/house2.jpeg"],
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
	    "images": ["assets/img/properties/house2.jpeg"],
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
	    "images": ["assets/img/properties/house4.jpeg"],
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
	    "images": ["assets/img/properties/house4.jpeg"],
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
	    "images": ["assets/img/properties/house2.jpeg"],
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
	    "images": ["assets/img/properties/house3.jpeg"],
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
	    "images": ["assets/img/properties/house3.jpeg"],
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
	    "images": ["assets/img/properties/house1.jpeg"],
	    "age": 3,
	    "locality": "Windsor",
			"location": "Montana",
			"descriptionShort": "3BR 2BA, 1650sqft.",
      "price": 350000,
      "source": "New Construction",
	  }
	],
	selected: 0
};

const listingsReducer = (state = listingsInitialState, action) => {

  if (action.type === 'GOT_LISTINGS')
  {
    return Object.assign({}, state, {
      matches: [ action.payload ]
    })
  }

  if (action.type === 'SELECT_LISTING')
  {
    return Object.assign({}, state, {
      selected: [ action.payload ]
    })
  }

  return state
};

export default listingsReducer;