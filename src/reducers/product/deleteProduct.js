import {
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_END,
} from '../../actionTypes/productActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case DELETE_PRODUCT_START:
      return {
        ...state,
        loading: true,
        message: null,
        productErrors: null,
      };
    case DELETE_PRODUCT_SUCCESS:
      window.location.replace('/displayproduct');
      return {
        ...state,
        loading: false,
        message: payload.message,
        data: payload.data,
      };
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        productErrors: payload.error,
      };
    case DELETE_PRODUCT_END:
      return {
        ...state,
        loading: false,
        message: null,
        productErrors: null,
      };

    default:
      return null;
  }
};
export default reducer;
