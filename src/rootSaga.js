import { all, fork } from 'redux-saga/effects'
import { drizzleSagas } from 'drizzle'
import { watchUploadFileRequest } from './sagas/dataSaga'

export default function* root() {
  yield all(
    drizzleSagas.map(saga => fork(saga))
  )
  yield fork(watchUploadFileRequest)
}
