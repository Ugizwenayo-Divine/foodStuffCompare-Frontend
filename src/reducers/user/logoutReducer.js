import {
    USER_LOGOUT_END,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILURE,
    USER_LOGOUT_START,
  } from '../../actionTypes/userActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case USER_LOGOUT_START:
        return {
          ...state,
          loading: true,
          userErrors: null,
          message: null,
        };
      case USER_LOGOUT_SUCCESS:
        window.location.reload();
        return {
          ...state,
          loading: false,
          userErrors: null,
          message: payload.message,
        };
      case USER_LOGOUT_FAILURE:
        return {
          ...state,
          loading: false,
          userErrors: payload.error,
          message: null,
        };
      case USER_LOGOUT_END:
        return {
          ...state,
          loading: false,
          userErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  