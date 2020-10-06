import {
    CATEGORY_DISPLAY_END,
    CATEGORY_DISPLAY_FAILURE,
    CATEGORY_DISPLAY_START,
    CATEGORY_DISPLAY_SUCCESS,
  } from '../../actionTypes/categoryActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case CATEGORY_DISPLAY_START:
        return {
          ...state,
          loading: true,
          categoryErrors: null,
          message: null,
        };
      case CATEGORY_DISPLAY_SUCCESS:
        return {
          ...state,
          loading: false,
          categoryErrors: null,
          message: payload.message,
          categories: payload.data,
        };
      case CATEGORY_DISPLAY_FAILURE:
        return {
          ...state,
          loading: false,
          categoryErrors: payload.error,
          message: null,
        };
      case CATEGORY_DISPLAY_END:
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
  