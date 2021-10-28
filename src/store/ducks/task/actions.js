import {
  ADD_TASK,
  REMOVE_TASK_BY_ID,
  USER_FETCH_REQUESTED,
  USER_FETCH_FAILED,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
} from './types'

export const getData = (userData) => {
  const { test } = userData
  const id = new Date().getTime()

  return {
    type: GET_DATA,
    payload: {
      id,
      test
    },
  }
}

export const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload
})

export const getDataFailed = (payload) => ({
  type: GET_DATA_FAILED,
  payload
})

export const addTask = (userData, task) => {
  const { avatar_url, name, login } = userData
  const id = new Date().getTime()

  return {
    type: ADD_TASK,
    payload: {
      id,
      task,
      name,
      userName: login,
      avatar: avatar_url,
    },
  }
}

export const removeTaskById = (taskId) => ({
  type: REMOVE_TASK_BY_ID,
  payload: taskId
})

export const requestFetchUser = (userName, task) => ({
  type: USER_FETCH_REQUESTED,
  payload: {
    userName,
    task,
  }
})

export const fetchUserSuccess = (payload) => ({
  type: USER_FETCH_FAILED,
  payload
})

export const fetchUserFailed = () => ({
  type: USER_FETCH_FAILED,
})
