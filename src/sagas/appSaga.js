import { 
  call, 
  put, 
  take, 
  all, 
  select 
} from 'redux-saga/effects'

import { 
  ActionTypes,
  web3Initialized
} from '../actions';

import services from '../services';
import { 
  getUserId, 
  getPropId 
} from '../reducers/selectors';

//import { createUploadFileChannel } from './createUploadFileChannel';

// Watch for an upload request and then
// defer to another saga to perform the actual upload
export function* watchWeb3Initialized() {
  yield take(ActionTypes.WEB3_INITIALIZED)
  try {
    //yield call(services.web3.web3Interface.setWeb3)
    console.log('got web3 provider')
    const account = yield call(services.web3.getAccount)
    console.log('got account: ')
    console.dir(account);
    //yield put(web3Initialized(web3Provider));
    //yield call(uploadFileSaga, file);
    // const userId = yield select(getUserId)
    // const propId = yield select(getPropId)
    // const { location } = yield call(services.requestFileUpload, file, userId)

    // console.log('request ack, location: ');
    // const success = yield call(services.uploadFile, file)
    // if (success) {
    //   console.log('upload success');
    //   yield put(uploadSuccess(file));
    //   //yield put(setLocation(location))
    //   const redaAddress = yield call(services.createOrUpdateREDA, propId, location)
    //   yield put(linkRedaToProp({ redaAddress }))
    // }
  } catch (e) {
    console.log(e);
    //yield put(handleError(e))
    //yield put(uploadError(e))
  }
}
