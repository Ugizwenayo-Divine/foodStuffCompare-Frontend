import {
    DELIVER_ORDER_END,
    DELIVER_ORDER_SUCCESS,
    DELIVER_ORDER_FAILURE,
    DELIVER_ORDER_START,
  } from '../../actionTypes/orderActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DELIVER_ORDER_START:
        return {
          ...state,
          loading: true,
          deliverErrors: null,
          message: null,
        };
      case DELIVER_ORDER_SUCCESS:
        console.log(payload,'reducer')
        return {
          ...state,
          loading: false,
          deliverErrors: null,
          message: payload.message,
        };
      case DELIVER_ORDER_FAILURE:
        return {
          ...state,
          loading: false,
          deliverErrors: payload.error,
          message: null,
        };
      case DELIVER_ORDER_END:
        return {
          ...state,
          loading: false,
          deliverErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  