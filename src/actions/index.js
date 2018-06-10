export const ActionTypes = {
    UPLOAD_REQUEST:  'UPLOAD_REQUEST',
    UPLOAD_PROGRESS: 'UPLOAD_PROGRESS',
    UPLOAD_SUCCESS:  'UPLOAD_SUCCESS',
    UPLOAD_FAILURE:  'UPLOAD_FAILURE',

    COMPLETE_TASK: 'COMPLETE_TASK',
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


export const completeTask = (task) => ({
    type: ActionTypes.COMPLETE_TASK, 
    payload: task,
});