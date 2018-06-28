export default [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_uri",
				"type": "string"
			},
			{
				"name": "_meta",
				"type": "string"
			}
		],
		"name": "createREDA",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getRedasByOwner",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "redaToOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_redaId",
				"type": "uint256"
			},
			{
				"name": "_newMeta",
				"type": "string"
			}
		],
		"name": "changeMeta",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_redaId",
				"type": "uint256"
			},
			{
				"name": "_newUri",
				"type": "string"
			}
		],
		"name": "changeUri",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "redas",
		"outputs": [
			{
				"name": "uri",
				"type": "string"
			},
			{
				"name": "meta",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "redaId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "uri",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "meta",
				"type": "string"
			}
		],
		"name": "NewReda",
		"type": "event"
	}
]