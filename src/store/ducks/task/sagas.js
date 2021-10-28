import { takeEvery, put, call } from 'redux-saga/effects'
import { USER_FETCH_REQUESTED, GET_DATA_SUCCESS } from './types'
import { fetchUserSuccess, fetchUserFailed, getDataFailed, getDataSuccess } from './actions'
import { API } from 'services'

export function* getData(){
  try {
    const dataUser = yield call(API)
    yield put(getDataSuccess(dataUser))
  } catch (e) {
    yield put(getDataFailed())
  }
  
}

export function* fetchUser(action) {
  try {
    const { task } = action.payload
    const { data } = yield call(API.get)
    // const addTaskAction = addTask(data, task)
    yield put(fetchUserSuccess(data, task))
  } catch (e) {
    yield put(fetchUserFailed())
  }
}

export function* watchFetchUser() {
  yield takeEvery(USER_FETCH_REQUESTED, fetchUser)
  yield takeEvery(GET_DATA_SUCCESS, getData)
}
