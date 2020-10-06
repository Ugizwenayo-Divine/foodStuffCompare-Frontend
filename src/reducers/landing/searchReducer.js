import {
    USER_SEARCH_END,
    USER_SEARCH_FAILURE,
    USER_SEARCH_START,
    USER_SEARCH_SUCCESS,
  } from '../../actionTypes/searchActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case USER_SEARCH_START:
        return {
          ...state,
          loading: true,
          searchErrors: null,
          message: null,
        };
      case USER_SEARCH_SUCCESS:
        return {
          ...state,
          loading: false,
          searchErrors: null,
          message: payload.message,
          data: payload.data,
          token: localStorage.getItem('token')
        };
      case USER_SEARCH_FAILURE:
        return {
          ...state,
          loading: false,
          searchErrors: payload.error,
          message: null,
        };
      case USER_SEARCH_END:
        return {
          ...state,
          loading: false,
          searchErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  