import { all, fork } from 'redux-saga/effects'
import { watchUploadFileRequest } from './sagas/dataSaga'
import { watchWeb3Initialized } from './sagas/appSaga'

export default function* root() {
  yield fork(watchUploadFileRequest)
  yield fork(watchWeb3Initialized)
}
