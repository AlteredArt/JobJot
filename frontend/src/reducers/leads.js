import { GET_LEADS, DELETE_LEAD, ADD_LEAD, CLEAR_LEADS } from '../actions/types.js';

const initialState = []

//here i am having trouble understanding the redcuers actions
export default function (state = initialState, action) {
  switch (action.type) {
// in the case of get leads, this is working
    case GET_LEADS:
    console.log('get lead')
      return [...action.payload];
// in the case of delete lead, this is working
    case DELETE_LEAD:
    console.log('delete lead')
      return state.leads.filter(lead => lead.id !== action.payload);
// in case of add lead, this is working
    case ADD_LEAD:
    console.log('add lead')
      return [...state, action.payload]
// in the case of clear lead, this needs work
    // case CLEAR_LEADS:
    // console.log('clear leadd')
    //   return [...action.payload]
    // i want to return ...state, and leads: as [] and empty array
    default:
      return state;
  }
  }
