import { call, put, take, all, fork, takeEvery } from 'redux-saga/effects'
import { ActionTypes, uploadProgress, uploadSuccess, uploadFailure, addImageToProp } from '../actions';
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
  yield put(addImageToProp(file));
  return;
  const channel = yield call(addData, '/some/path', file);
  while (true) {
	  const { progress = 0, err, success } = yield take(channel);
	  if (err) {
      yield put(uploadFailure(file, err));
      return;
	  }
	  if (success) {
      yield put(uploadSuccess(file));
      yield put(addImageToProp(file));
      return;
	  }
	  yield put(uploadProgress(file, progress));
  }
}

const API_KEY = '<website api key>';
const API_ENDPOINT = `https://api.realestatechain.io/aws/getImages?api_key=${API_KEY}`;

const fetchImages = (propId) => {
  return fetch(API_ENDPOINT + `&pid=${propId}`).then(function (response) {
    return response.json().then(function (json) {
      return json.photos.photo.map(
        ({uri}) => `https://api.realestatechain.io/${uri}.jpg`
      );
    })
  })
};

export function* loadImages() {
  const images = yield fetchImages();
  console.log(images)
}