import { 
  call, 
  put, 
  take, 
  all, 
  fork, 
  takeEvery, 
  select 
} from 'redux-saga/effects'

import { 
  ActionTypes, 
  uploadProgress, 
  uploadSuccess, 
  uploadError, 
  uploadComplete, 
  addFileToProp, 
  setLocation,
  linkRedaToProp,
} from '../actions';

import services from '../services';
import { 
  getUserId, 
  getPropId 
} from '../reducers/selectors';

//import { createUploadFileChannel } from './createUploadFileChannel';

// Watch for an upload request and then
// defer to another saga to perform the actual upload
export function* watchUploadFileRequest() {
  yield takeEvery(ActionTypes.UPLOAD_REQUEST, function*(action) {
    try {
      const file = action.payload;
      yield put(addFileToProp(file));
      //yield call(uploadFileSaga, file);
      const userId = yield select(getUserId)
      const propId = yield select(getPropId)
      const location = yield call(services.requestFileUpload, file, userId)

      console.log('request ack, location: ' + location);
      const success = yield call(services.uploadFile, file, location)
      if (success) {
        console.log('upload success');
        yield put(uploadSuccess(file));
        //yield put(setLocation(location))
        const redaAddress = yield call(services.createOrUpdateREDA, propId, location)
        yield put(linkRedaToProp({ redaAddress }))
      }
    } catch (e) {
      console.log(e);
      yield put(handleError(e))
      //yield put(uploadError(e))
    }
    yield put(uploadComplete())
  });
}

function handleError(err, other) {
  console.log(err);
  if (other) {
    console.dir(other);
  }
}

// export function* watchUploadFile() {
//   while (true) {
//     yield take(ActionTypes.UPLOAD_REQUEST)
//     try {
//       const file = yield select(getNew)
//       const location = yield call(addData(file))
//       yield put(setLocation(location))

//       const newAttachment: Attachment = yield select(Selectors.Attachment.getNew)
//       yield put(Actions.Attachment.addToCache(newAttachment))
//       yield put(Actions.Transactions.setAttachment(newAttachment.ipfs))
//     } catch (e) {
//       yield put(Actions.App.handleError(e))
//     }
//     yield put(uploadSuccess(file))
//   }
// }

// Upload the specified file
// export function* uploadFileSaga(file) {
//   return;
//   const channel = yield call(addData, '/some/path', file);
//   while (true) {
// 	  const { progress = 0, err, success } = yield take(channel);
// 	  if (err) {
//       yield put(uploadFailure(file, err));
//       return;
// 	  }
// 	  if (success) {
//       yield put(uploadSuccess(file));
//       yield put(addImageToProp(file));
//       return;
// 	  }
// 	  yield put(uploadProgress(file, progress));
//   }
// }

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

function parseMetaData(url) {
  const fullUrl = `${API_ENDPOINT}${encodeURI(url)}`
  return fetch(fullUrl, {mode: 'cors'})
    .then(data => data.json())
    .then((json) => {
      if (json.error) {
        return null
      }
      console.log(json)
      return json
    })
    .catch(console.log)
}

export function* loadImages() {
  const images = yield fetchImages();
  console.log(images)
}