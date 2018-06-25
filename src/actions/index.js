export const ActionTypes = {
    STORE_READY: 'STORE_READY',
    UPLOAD_REQUEST:  'UPLOAD_REQUEST',
    UPLOAD_START: 'UPLOAD_START',
    UPLOAD_PROGRESS: 'UPLOAD_PROGRESS',
    UPLOAD_SUCCESS:  'UPLOAD_SUCCESS',
    UPLOAD_ERROR:  'UPLOAD_ERROR',
    UPLOAD_COMPLETE: 'UPLOAD_COMPLETE',
    ADD_FILE: 'ADD_FILE',
    COMPLETE_TASK: 'COMPLETE_TASK',
    GOT_LISTINGS: 'GOT_LISTINGS',
    LINK_REDA: 'LINK_REDA',
    WEB3_INITIALIZED: 'WEB3_INITIALIZED',
    SET_ACCOUNTS: 'SET_ACCOUNTS',
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

export const addFileToProp = (file) => ({
    type: ActionTypes.ADD_FILE,
    payload: file,
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