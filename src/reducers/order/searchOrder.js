import {
    SEARCH_ORDER_END,
    SEARCH_ORDER_SUCCESS,
    SEARCH_ORDER_FAILURE,
    SEARCH_ORDER_START,
  } from '../../actionTypes/orderActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case SEARCH_ORDER_START:
        return {
          ...state,
          loading: true,
          orderErrors: null,
          message: null,
        };
      case SEARCH_ORDER_SUCCESS:
        console.log(payload,'reducer')
        return {
          ...state,
          loading: false,
          orderErrors: null,
          message: payload.message,
          data: payload.data,
        };
      case SEARCH_ORDER_FAILURE:
        return {
          ...state,
          loading: false,
          orderErrors: payload.error,
          message: null,
        };
      case SEARCH_ORDER_END:
        return {
          ...state,
          loading: false,
          orderErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  