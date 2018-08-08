import { FETCH_API_REQUEST, FETCH_API_FAILURE, FETCH_API_SUCCESS } from '../actions/types/home';

const initialState = {
  apiResponse: {},
  error: null
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_REQUEST:
      return { ...state, error: action.error }
    case FETCH_API_FAILURE:
      return { ...state, error: null }
    case FETCH_API_SUCCESS:
      return {
        ...state,
        apiResponse: action.apiResponse
      }
    default:
      return state
  }
}

export default home