import { FETCH_API_REQUEST, FETCH_API_FAILURE, FETCH_API_SUCCESS } from '../types/home'
import axios from 'axios'

export const APIFailure = () => {
  return {
    type: FETCH_API_FAILURE
  }
}

export const APIRequest = () => {
  return {
    type: FETCH_API_REQUEST
  }
}

export const APISuccess = data => {
  return {
    type: FETCH_API_SUCCESS,
    data
  }
}

export const recoverAPIdata = () => {
  return (dispatch: Function) => {
    axios
      .get(`https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`)
      .then(response => response.json())
      .then(response => dispatch(APISuccess(response.data)))
      .catch(error => {
        console.error('error getting Catalog ', error) // eslint-disable-line no-console
      })
  }
}