import { call, put, take, all, fork } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { ActionTypes, uploadProgress, uploadSuccess, uploadFailure } from '../actions';
import { addData } from '../services';

//import { createUploadFileChannel } from './createUploadFileChannel';

// Watch for an upload request and then
// defer to another saga to perform the actual upload
export function* watchUploadRequestSaga() {
  yield takeEvery(ActionTypes.UPLOAD_REQUEST, function*(action) {
    const file = action.payload;
    yield call(uploadFileSaga, file);
  });
}

// Upload the specified file
export function* uploadFileSaga(file) {
  const channel = yield call(addData, '/some/path', file);
  while (true) {
	  const { progress = 0, err, success } = yield take(channel);
	  if (err) {
      yield put(uploadFailure(file, err));
      return;
	  }
	  if (success) {
      yield put(uploadSuccess(file));
      return;
	  }
	  yield put(uploadProgress(file, progress));
  }
}