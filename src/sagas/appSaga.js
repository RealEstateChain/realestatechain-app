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
  const action = yield take(ActionTypes.WEB3_INITIALIZED)
  try {
    const web3Instance = action.payload.web3Instance;
    //yield call(services.web3.web3Interface.setWeb3)
    console.log('got  web3 instance: ')
    console.log(web3Instance)
    yield call(services.web3.web3Interface.setWeb3, web3Instance)
    console.log('set web3')
    const accounts = yield call(services.web3.fetchAccounts)
    console.log('got accounts')
    yield put({type: ActionTypes.SET_ACCOUNTS, payload: accounts});
    // const acct = yield call(services.web3.getAccount)
    // console.log(acct)
    //yield put(web3Initialized(web3Provider));

  } catch (e) {
    console.log(e);
    //yield put(handleError(e))
    //yield put(uploadError(e))
  }
  
}
