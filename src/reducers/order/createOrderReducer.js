import {
    ORDER_PRODUCT_END,
    ORDER_PRODUCT_SUCCESS,
    ORDER_PRODUCT_FAILURE,
    ORDER_PRODUCT_START,
  } from '../../actionTypes/orderActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case ORDER_PRODUCT_START:
        return {
          ...state,
          loading: true,
          orderErrors: null,
          message: null,
        };
      case ORDER_PRODUCT_SUCCESS:
        console.log(payload,'reducer')
        return {
          ...state,
          loading: false,
          orderErrors: null,
          message: payload.message,
          data: payload.data,
        };
      case ORDER_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          orderErrors: payload.error,
          message: null,
        };
      case ORDER_PRODUCT_END:
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
  