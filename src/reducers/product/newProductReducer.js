import {
  CREATE_PRODUCT_START,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_END,
} from '../../actionTypes/productActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_PRODUCT_START:
      return {
        ...state,
        loading: true,
        message: null,
        productErrors: null,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        productErrors: null,
      };
    case CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        productErrors: payload.error,
      };
    case CREATE_PRODUCT_END:
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
