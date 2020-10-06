import {
  USER_UPDATE_END,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_UPDATE_START,
} from '../../actionTypes/userActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case USER_UPDATE_START:
      return {
        ...state,
        loading: true,
        userErrors: null,
        message: null,
      };
    case USER_UPDATE_SUCCESS:
      window.location.replace('/displayuser')
      return {
        ...state,
        loading: false,
        userErrors: null,
        message: payload.message,
      };
    case USER_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        userErrors: payload.error,
        message: null,
      };
    case USER_UPDATE_END:
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
