// all these work, move on
// these are my leads actions
// getLeads
// deleteLead
// addLead

import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// this is the get leads function
export const getLeads = (dispatch, getState) => {
  axios
  .get("/api/leads/", tokenConfig(getState))
  .then(res => {
    dispatch({
      type: GET_LEADS,
      payload: res.data,
    });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// this is the delete leads function

export const deleteLead = (id,dispatch, getState) => {
  console.log('you deleted the lead')
  axios
    .delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
  .catch(err => console.log(err));
};

// this is the add lead function
export const addLead = (lead) => (dispatch, getState) => {
  axios
  .post('/api/leads/', lead, tokenConfig(getState))
  .then(res => {
    dispatch(createMessage({ addLead: "Lead Added Successfully"}));
    dispatch({
      type: ADD_LEAD,
      payload: res.data
    });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
