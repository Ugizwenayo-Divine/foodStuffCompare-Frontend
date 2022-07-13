import {
    CANCEL_ORDER_END,
    CANCEL_ORDER_SUCCESS,
    CANCEL_ORDER_FAILURE,
    CANCEL_ORDER_START,
  } from '../../actionTypes/orderActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case CANCEL_ORDER_START:
        return {
          ...state,
          loading: true,
          orderErrors: null,
          message: null,
        };
      case CANCEL_ORDER_SUCCESS:
        console.log(payload,'reducer')
        return {
          ...state,
          loading: false,
          orderErrors: null,
          message: payload.message,
        };
      case CANCEL_ORDER_FAILURE:
        return {
          ...state,
          loading: false,
          orderErrors: payload.error,
          message: null,
        };
      case CANCEL_ORDER_END:
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
  