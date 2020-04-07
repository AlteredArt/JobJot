//your reducer leads may have a problem.
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types.js';
//here i changed the inital state from {leads: []}; to unnest the leads object
const initialState = []

//here i am having trouble understanding the redcuers actions
export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LEADS:
      return [...action.payload];

    case DELETE_LEAD:
      return state.filter(lead => lead.id !== action.payload)


    case ADD_LEAD:
      return [...state, action.payload]

    default:
      return state;
  }
}
