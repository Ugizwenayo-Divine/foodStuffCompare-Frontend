import {
  DISPLAY_PRODUCT_START,
  DISPLAY_PRODUCT_SUCCESS,
  DISPLAY_PRODUCT_FAILURE,
  DISPLAY_PRODUCT_END,
} from '../../actionTypes/productActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case DISPLAY_PRODUCT_START:
      return {
        ...state,
        loading: true,
        message: null,
        productErrors: null,
      };
    case DISPLAY_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        data: payload.data,
      };
    case DISPLAY_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        productErrors: payload.error,
      };
    case DISPLAY_PRODUCT_END:
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
