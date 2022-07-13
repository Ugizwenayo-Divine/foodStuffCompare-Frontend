import {
  USER_DISPLAY_END,
  USER_DISPLAY_SUCCESS,
  USER_DISPLAY_FAILURE,
  USER_DISPLAY_START,
} from '../../actionTypes/userActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case USER_DISPLAY_START:
      return {
        ...state,
        loading: true,
        userErrors: null,
        message: null,
      };
    case USER_DISPLAY_SUCCESS:
      return {
        ...state,
        loading: false,
        userErrors: null,
        message: payload.message,
        data: payload.data
      };
    case USER_DISPLAY_FAILURE:
      return {
        ...state,
        loading: false,
        userErrors: payload.error,
        message: null,
      };
    case USER_DISPLAY_END:
      return {
        ...state,
        loading: false,
        userErrors: null,
        message: null,
      };

    default:
      return null;
  }
};
export default reducer;
