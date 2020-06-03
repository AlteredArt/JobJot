// this combines the reducers and acts as its index
import { combineReducers } from 'redux';
// bring in all your reducers so you can export them
import leads from './leads';
import errors from './errors';
import messages from './messages';
import auth from './auth';

// this function combines the reducers for easy export
export default combineReducers({
  leads,
  errors,
  messages,
  auth,
});
