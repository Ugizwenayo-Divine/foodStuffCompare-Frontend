import {
  CATEGORY_DELETE_END,
  CATEGORY_DELETE_FAILURE,
  CATEGORY_DELETE_START,
  CATEGORY_DELETE_SUCCESS,
} from '../../actionTypes/categoryActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CATEGORY_DELETE_START:
      return {
        ...state,
        loading: true,
        categoryErrors: null,
        message: null,
      };
    case CATEGORY_DELETE_SUCCESS:
      window.location.replace('/displaycategory');
      return {
        ...state,
        loading: false,
        categoryErrors: null,
        message: payload.message,
      };
    case CATEGORY_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        categoryErrors: payload.error,
        message: null,
      };
    case CATEGORY_DELETE_END:
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
