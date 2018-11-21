import { combineReducers } from 'redux';

const INITIAL_STATE = {
  auth: {
    'access-token': '',
    'client': '',
    'expiry': '',
    'token-type': '',
    'uid': '',
    'authorize': false
  }
}

function data(state=INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_AUTH":
      return { 
        ...state,
        auth: {
          ...action.payload,
          authorize: true
        }
      }
    default:
      return state;
  }
}

export default combineReducers({data});