import {
    PAYMENT_END,
    PAYMENT_SUCCESS,
    PAYMENT_FAILURE,
    PAYMENT_START,
  } from '../../actionTypes/paymentActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case PAYMENT_START:
        return {
          ...state,
          loading: true,
          paymentErrors: null,
          message: null,
        };
      case PAYMENT_SUCCESS:
        console.log(payload,'reducer')
        return {
          ...state,
          loading: false,
          paymentErrors: null,
          message: payload.message,
          data: payload.data,
        };
      case PAYMENT_FAILURE:
        return {
          ...state,
          loading: false,
          paymentErrors: payload.error,
          message: null,
        };
      case PAYMENT_END:
        return {
          ...state,
          loading: false,
          paymentErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  