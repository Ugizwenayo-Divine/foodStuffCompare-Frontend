import {
  CATEGORY_CREATE_END,
  CATEGORY_CREATE_FAILURE,
  CATEGORY_CREATE_START,
  CATEGORY_CREATE_SUCCESS,
} from '../../actionTypes/categoryActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CATEGORY_CREATE_START:
      return {
        ...state,
        loading: true,
        categoryErrors: null,
        message: null,
      };
    case CATEGORY_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryErrors: null,
        message: payload.message,
        categories: payload.data,
      };
    case CATEGORY_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        categoryErrors: payload.error,
        message: null,
      };
    case CATEGORY_CREATE_END:
      return {
        ...state,
        loading: false,
        categoryErrors: null,
        message: null,
      };

    default:
      return null;
  }
};
export default reducer;
