import {
    CLIENT_ORDERS_END,
    CLIENT_ORDERS_SUCCESS,
    CLIENT_ORDERS_FAILURE,
    CLIENT_ORDERS_START,
  } from '../../actionTypes/orderActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case CLIENT_ORDERS_START:
        return {
          ...state,
          loading: true,
          orderErrors: null,
          message: null,
        };
      case CLIENT_ORDERS_SUCCESS:
        // window.location.reload();        
        return {
          ...state,
          loading: false,
          orderErrors: null,
          message: payload.message,
          data: payload.data,
        };
      case CLIENT_ORDERS_FAILURE:
        return {
          ...state,
          loading: false,
          orderErrors: payload.error,
          message: null,
        };
      case CLIENT_ORDERS_END:
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
  