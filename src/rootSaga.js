import { all, fork } from 'redux-saga/effects'
import { drizzleSagas } from 'drizzle'
import { watchUploadRequestSaga } from './sagas/data'

export default function* root() {
  yield all(
    drizzleSagas.map(saga => fork(saga))
  )
  yield fork(watchUploadRequestSaga)
}
