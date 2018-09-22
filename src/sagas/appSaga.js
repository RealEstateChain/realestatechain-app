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

    console.log('got  web3 instance: ')
    console.log(web3Instance)
    yield call(services.web3.web3Interface.setWeb3, web3Instance)
    console.log('set web3')
    const accounts = yield call(services.web3.fetchAccounts)
    console.log('got accounts: ')
    console.dir(accounts)
    yield put({type: ActionTypes.SET_ACCOUNTS, payload: accounts})

    yield call(services.web3.initiaizeEventListener)


  } catch (e) {
    console.log(e);
  }
  
}

export function* watchCreateREDA() {
  yield takeEvery(ActionTypes.CREATE_REDA, function*(action) {
    try {
      const meta = JSON.stringify(action.payload)
      const propWallet = { uri: `http://uri1`, meta: meta }
      const creator = yield select(getUserAccount)
      const newRedaReceipt = yield call(services.web3.createNewREDA, propWallet, creator)
      console.log('created reda')
      console.dir(newRedaReceipt)
      yield put({type: ActionTypes.FETCH_REDA, payload: newRedaReceipt.transactionId});
      const history = yield call(services.web3.getRedaHistory, newRedaReceipt.transactionId);
    yield put({type: ActionTypes.LOAD_REDA_HISTORY, payload: history});
      //const newReda = yield call(services.web3.getRedasByOwner, creator)
      //console.log('new reda:')
      //console.dir(newReda)
      //const newRedaDetails = yield call(services.web3.getRedaDetails, newReda.id)

      
    } catch (e) {
      console.log(e);
    }
  })
}


// Watch for an upload request and then
// defer to another saga to perform the actual upload
export function* watchLoadREDA() {
  const action = yield take(ActionTypes.FETCH_REDA)
  try {
    const redaId = action.payload
debugger;
    const history = yield call(services.web3.getRedaHistory, redaId);
    yield put({type: ActionTypes.LOAD_REDA_HISTORY, payload: history});

  } catch (e) {
    console.log(e);
  }
  
}