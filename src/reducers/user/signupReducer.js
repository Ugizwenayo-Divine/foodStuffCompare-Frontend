import {
  USER_SIGNUP_END,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_START,
} from '../../actionTypes/userActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP_START:
      return {
        ...state,
        loading: true,
        loginErrors: null,
        message: null,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        loginErrors: null,
        message: payload.message,
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        loginErrors: payload.error,
        message: null,
      };
    case USER_SIGNUP_END:
      return {
        ...state,
        loading: false,
        loginErrors: null,
        message: null,
      };

    default:
      return null;
  }
};
export default reducer;
