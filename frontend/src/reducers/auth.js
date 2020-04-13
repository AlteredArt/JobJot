// there is a problem with your actions being like objects

// bring in your types from the actions index
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

// reducer for auths initial state
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

// reducer function for auth, with all its case statements
// use all your action types above
export default function (state = initialState, action) {
  switch (action.type) {
// in the case the user is loading
      case USER_LOADING:
      console.log('User is Loading')
        return {
          ...state,
          isLoading: true,
        };
// in the case the user is loaded
      case USER_LOADED:
      console.log('This user loaded')
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload,
        };
// in the case the login or the register are a success
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
      console.log('login register great success')

        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false,
        };
// in the case login or register should fail, use auth error, and login fail
// here im giving multiple cases for a certain instance
// all these cases the token is removed
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTER_FAIL:
      console.log('some fail or logout')
        localStorage.removeItem('token');
          return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,
          };
    default:
      return state;
  }
}
