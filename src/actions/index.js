export const ActionTypes = {
    STORE_READY: 'STORE_READY',
    UPLOAD_REQUEST:  'UPLOAD_REQUEST',
    UPLOAD_START: 'UPLOAD_START',
    UPLOAD_PROGRESS: 'UPLOAD_PROGRESS',
    UPLOAD_SUCCESS:  'UPLOAD_SUCCESS',
    UPLOAD_ERROR:  'UPLOAD_ERROR',
    UPLOAD_COMPLETE: 'UPLOAD_COMPLETE',
    ADD_IMAGE: 'ADD_IMAGE',
    ADD_FLOORPLAN: 'ADD_FLOORPLAN',
    COMPLETE_TASK: 'COMPLETE_TASK',
    GOT_LISTINGS: 'GOT_LISTINGS',
    LINK_REDA: 'LINK_REDA',
    FETCH_REDA: 'FETCH_REDA',
    WEB3_INITIALIZED: 'WEB3_INITIALIZED',
    SET_ACCOUNTS: 'SET_ACCOUNTS',
    CREATE_REDA: 'CREATE_REDA',
    LOAD_REDA_HISTORY: 'LOAD_REDA_HISTORY',
    SET_TITLE: 'SET_TITLE',
    SET_ADDRESS: 'SET_ADDRESS',
    SET_EXTRA: 'SET_EXTRA',
    SET_CONTRACT_ADDRESS: 'SET_CONTRACT_ADDRESS',
    SET_PRICE: 'SET_PRICE',
};

export const requestFileUpload = (file) => ({
    type: ActionTypes.UPLOAD_REQUEST,
    payload: file,
});
export const uploadStart = (file) => ({
    type: ActionTypes.UPLOAD_START,
    payload: file,
});
export const uploadProgress = (file, progress /* number */ ) => ({
    type: ActionTypes.UPLOAD_PROGRESS,
    payload: progress,
    meta: { file },
});

export const uploadSuccess = (file) => ({
    type: ActionTypes.UPLOAD_SUCCESS,
    payload: { file },
});
export const uploadError = (file, err) => ({
    type: ActionTypes.UPLOAD_ERROR,
    payload: err,
    error: true,
    meta: { file },
});

export const uploadComplete = () => ({
    type: ActionTypes.UPLOAD_COMPLETE,
    payload: null,
});

export const addImageToProp = (image) => ({
    type: ActionTypes.ADD_IMAGE,
    payload: image,
});

export const addFloorplanToProp = (image) => ({
    type: ActionTypes.ADD_FLOORPLAN,
    payload: image,
});

export const setPropTitle = (title) => ({
    type: ActionTypes.SET_TITLE,
    payload: title,
});

export const setPropAddress = (address) => ({
    type: ActionTypes.SET_ADDRESS,
    payload: address,
});

export const setPropExtra = (extra) => ({
    type: ActionTypes.SET_EXTRA,
    payload: extra,
});

export const setPropPrice = (price) => ({
    type: ActionTypes.SET_PRICE,
    payload: price,
});

export const setPropContractAddress = (contractAddress) => ({
    type: ActionTypes.SET_CONTRACT_ADDRESS,
    payload: contractAddress,
});

export const fetchReda = (id) => ({
    type: ActionTypes.FETCH_REDA,
    payload: id,
});

export const linkRedaToProp = (address) => ({
    type: ActionTypes.LINK_REDA,
    payload: address,
});

export const getData = (type) => ({
    type: ActionTypes.GET_DATA,
    payload: type
});

export const gotListings = (listings) => ({
    type: ActionTypes.GOT_LISTINGS,
    payload: listings
});

export const web3Initialized = (web3) => ({
    type: ActionTypes.WEB3_INITIALIZED,
    payload: web3
});

export const completeTask = (task) => ({
    type: ActionTypes.COMPLETE_TASK, 
    payload: task,
});

export const createREDA = (propWallet) => ({
    type: ActionTypes.CREATE_REDA, 
    payload: propWallet,
});

export const loadRedaHistory = (history) => ({
    type: ActionTypes.LOAD_REDA_HISTORY,
    payload: history,
});