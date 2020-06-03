// bring in create message from action types
import { CREATE_MESSAGE } from '../actions/types';

// leave the initial state open
const initialState = {};

// functionality to set off the create message alert
export default function(state = initialState, action) {
  switch(action.type) {
    case CREATE_MESSAGE:
      return (state = action.payload)
    default:
      return state;
  }
}
