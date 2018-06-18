export const ActionTypes = {
    UPLOAD_REQUEST:  'UPLOAD_REQUEST',
    UPLOAD_PROGRESS: 'UPLOAD_PROGRESS',
    UPLOAD_SUCCESS:  'UPLOAD_SUCCESS',
    UPLOAD_FAILURE:  'UPLOAD_FAILURE',
    ADD_IMAGE: 'ADD_IMAGE',
    COMPLETE_TASK: 'COMPLETE_TASK',
    GOT_LISTINGS: 'GOT_LISTINGS',
};
export const requestFileUpload = (file) => ({
    type: ActionTypes.UPLOAD_REQUEST,
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

export const addImageToProp = (image) => ({
    type: ActionTypes.ADD_IMAGE,
    payload: image,
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