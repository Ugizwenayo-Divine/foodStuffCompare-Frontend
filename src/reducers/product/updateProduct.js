import {
  UPDATE_PRODUCT_START,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_END,
} from '../../actionTypes/productActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_PRODUCT_START:
      return {
        ...state,
        loading: true,
        message: null,
        productErrors: null,
      };
    case UPDATE_PRODUCT_SUCCESS:
      window.location.replace('/displayproduct');
      return {
        ...state,
        loading: false,
        message: payload.message,
        data: payload.data,
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        productErrors: payload.error,
      };
    case UPDATE_PRODUCT_END:
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
