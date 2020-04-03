//questions 1
import axios from 'axios';
//import fromsrc/actions/types.js
import { GET_LEADS, DELETE_LEAD } from './types';

//this is the get leads function
export const getLeads = (dispatch) => {
  axios
  .get("/api/leads/")
  .then(res => {
    dispatch({
      type: GET_LEADS,
      payload: res.data
    });
  })
  .catch(err => console.log(err));
};


//this is the delete lead function, exported as a constant
export const deleteLead = (id) => (dispatch) => {
  axios
  .delete(`/api/leads/${id}/`)
  .then(res => {
//learn more about dispatch
    dispatch(createMessage({ deleteLead: "Lead Deleted"}));
    dispatch({
      type: DELETE_LEAD,
      payload: id
    });
  })
  .catch(err => console.log(err));
};
