import {
    DISPLAY_ORDERS_END,
    DISPLAY_ORDERS_SUCCESS,
    DISPLAY_ORDERS_FAILURE,
    DISPLAY_ORDERS_START,
  } from '../../actionTypes/orderActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DISPLAY_ORDERS_START:
        return {
          ...state,
          loading: true,
          orderErrors: null,
          message: null,
        };
      case DISPLAY_ORDERS_SUCCESS:
        console.log(payload,'reducer')
        return {
          ...state,
          loading: false,
          orderErrors: null,
          message: payload.message,
          data: payload.data,
        };
      case DISPLAY_ORDERS_FAILURE:
        return {
          ...state,
          loading: false,
          orderErrors: payload.error,
          message: null,
        };
      case DISPLAY_ORDERS_END:
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
  