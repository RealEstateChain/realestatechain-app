const listingsInitialState = {
	matches: [
	  {
	    "id": 0,
	    "title": "Groton School",
	    "address": "62 Groton School Rd",
	    "images": [
	    	"https://s3.us-east-2.amazonaws.com/prototypecontent/62+Groton+School+Road/01.jpg",
	    	"https://s3.us-east-2.amazonaws.com/prototypecontent/62+Groton+School+Road/02.jpg",
	    	"https://s3.us-east-2.amazonaws.com/prototypecontent/62+Groton+School+Road/03.jpg",
	    	"https://s3.us-east-2.amazonaws.com/prototypecontent/62+Groton+School+Road/04.jpg",
	    	"https://s3.us-east-2.amazonaws.com/prototypecontent/62+Groton+School+Road/05.jpg",
	    	"https://s3.us-east-2.amazonaws.com/prototypecontent/62+Groton+School+Road/06.jpg",
	    	"https://s3.us-east-2.amazonaws.com/prototypecontent/62+Groton+School+Road/07.jpg"
	    ],
	    "age": 3,
	    "locality": "Lisco",
			"location": "Alabama",
			"descriptionShort": "3BR 2BA, 1650sqft.",
      "price": 350000,
      "source": "New Construction",
	  },
	  {
	    "id": 1,
	    "title": "House 2",
	    "address": "62 Groton School Rd",
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
	    "title": "House 3",
	    "address": "62 Groton School Rd",
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
	    "title": "House 4",
	    "address": "62 Groton School Rd",
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
	    "title": "House 5",
	    "address": "62 Groton School Rd",
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
	    "title": "House 6",
	    "address": "62 Groton School Rd",
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
	    "title": "House 7",
	    "address": "62 Groton School Rd",
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
	    "title": "House 8",
	    "address": "62 Groton School Rd",
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
	    "title": "House 9",
	    "address": "62 Groton School Rd",
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
	    "title": "House 10",
	    "address": "62 Groton School Rd",
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
	    "title": "House 11",
	    "address": "62 Groton School Rd",
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
	    "title": "House 12",
	    "address": "62 Groton School Rd",
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