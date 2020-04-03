//your reducer may have a problem.
import { GET_LEADS, DELETE_LEAD } from '../actions/types.js';

const initialState = []


export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LEADS:
      return [...action.payload];
    case DELETE_LEAD:
      return {
        ...action.payload,
        leads: state.leads.filter(lead => lead.id !== action.payload)
      };
    default:
      return state;
  }
}
