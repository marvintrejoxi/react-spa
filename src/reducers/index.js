import { combineReducers } from 'redux';

// TOD: how to initialize data from server async
const INITIAL_STATE = {
  username: 'Guest!!'
}

function data(state=INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload }
    default:
      return state;
  }
}

export default combineReducers({data});