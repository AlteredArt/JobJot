// there might be a problem here
// these are my actions i want them to dispatch different types.
// loadUser
// login
// register
// logout
// token

import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { returnErrors } from './messages';


// this runs to run the load user program which starts a chain of events
// i need a user and a token
export const loadUser = (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};


// this is called in Login / accounts
// this is the login function, pass in the username and password as parameters
export const login = (username, password) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
  };
const body = JSON.stringify({ username, password });
  axios
    .post('/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
}



// register function, pass in username, password, and email
export const register = ({ username, password, email }) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
const body = JSON.stringify({ username, email, password });
  axios
    .post('/api/auth/register', body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};



// logout function
export const logout = () => (dispatch, getState) => {
  axios
    .post('/api/auth/logout/', null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: 'CLEAR_LEADS' });
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};


export const tokenConfig = (getState) => {
  console.log('getState', getState())
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
  };
  if(token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  return config;
};
