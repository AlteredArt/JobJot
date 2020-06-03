// bring in your types from the action index
import { GET_ERRORS } from '../actions/types';

// state of the initial error
const initialState = {
  msg: {},
  status: null,
}

// get errors function reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
    };
    default:
    return state;
  }
}
