import { CREATE_MESSAGE, GET_ERRORS } from './types';

// create the message function
// create message returns create message
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

// return errors returns get errors
export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};
