import { 
  call, 
  put, 
  take, 
  takeEvery,
  all, 
  select 
} from 'redux-saga/effects'

import { 
  ActionTypes,
  web3Initialized,
  loadRedaHistory,
  fetchReda,
} from '../actions';

import services from '../services';
import { 
  getUserAccount, 
} from '../reducers/selectors';

//import { createUploadFileChannel } from './createUploadFileChannel';

// Watch for an upload request and then
// defer to another saga to perform the actual upload
export function* watchWeb3Initialized() {
  const action = yield take(ActionTypes.WEB3_INITIALIZED)
  try {
    const web3Instance = action.payload.web3Instance
    //yield call(services.web3.web3Interface.setWeb3)
    console.log('got  web3 instance: ')
    console.log(web3Instance)
    yield call(services.web3.web3Interface.setWeb3, web3Instance)
    console.log('set web3')
    const accounts = yield call(services.web3.fetchAccounts)
    console.log('got accounts: ')
    console.dir(accounts)
    yield put({type: ActionTypes.SET_ACCOUNTS, payload: accounts})
    // const acct = yield call(services.web3.getAccount)
    // console.log(acct)
    //yield put(web3Initialized(web3Provider));

  } catch (e) {
    console.log(e);
    //yield put(handleError(e))
    //yield put(uploadError(e))
  }
  
}

export function* watchCreateREDA() {
  yield takeEvery(ActionTypes.CREATE_REDA, function*(action) {
    try {
      const meta = JSON.stringify(action.payload)
      const propWallet = { uri: `http://uri1`, meta: meta }
      const creator = yield select(getUserAccount)
      const newReda = yield call(services.web3.createNewREDA, propWallet, creator)
      console.log('created reda')
      console.dir(newReda)
      const newRedaDetails = yield call(services.web3.getRedaDetails, newReda.id)
      console.log('new reda details:')
      console.dir(newRedaDetails)

      yield put(fetchReda(newReda.id));
    } catch (e) {
      console.log(e);
      //yield put(handleError(e))
      //yield put(uploadError(e))
    }
  })
}


// Watch for an upload request and then
// defer to another saga to perform the actual upload
export function* watchLoadREDA() {
  const action = yield take(ActionTypes.FETCH_REDA)
  try {
    const redaId = action.payload.redaId

    const history = yield call(services.web3.getRedaHistory, redaId);
    yield put(loadRedaHistory(history));

  } catch (e) {
    console.log(e);
    //yield put(handleError(e))
    //yield put(uploadError(e))
  }
  
}