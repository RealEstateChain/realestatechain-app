export const ActionTypes = {
    UPLOAD_REQUEST:  'UPLOAD_REQUEST',
    UPLOAD_START: 'UPLOAD_START',
    UPLOAD_PROGRESS: 'UPLOAD_PROGRESS',
    UPLOAD_SUCCESS:  'UPLOAD_SUCCESS',
    UPLOAD_FAILURE:  'UPLOAD_FAILURE',
    ADD_FILE: 'ADD_FILE',
    COMPLETE_TASK: 'COMPLETE_TASK',
    GOT_LISTINGS: 'GOT_LISTINGS',
    LINK_REDA: 'LINK_REDA',
};
export const fileUploadRequest = (file) => ({
    type: ActionTypes.UPLOAD_REQUEST,
    payload: file,
});
export const fileUploadStart = (file) => ({
    type: ActionTypes.UPLOAD_START,
    payload: file,
});
export const uploadProgress = (file, progress /* number */ ) => ({
    type: ActionTypes.UPLOAD_PROGRESS,
    payload: progress,
    meta: { file },
});
export const fileUploadSuccess = (file) => ({
    type: ActionTypes.UPLOAD_SUCCESS,
    meta: { file },
});
export const fileUploadFailure = (file, err) => ({
    type: ActionTypes.UPLOAD_FAILURE,
    payload: err,
    error: true,
    meta: { file },
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


export const completeTask = (task) => ({
    type: ActionTypes.COMPLETE_TASK, 
    payload: task,
});