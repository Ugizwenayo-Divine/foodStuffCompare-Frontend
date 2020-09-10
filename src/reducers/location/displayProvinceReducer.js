import {
  PROVINCE_DISPLAY_START,
  PROVINCE_DISPLAY_SUCCESS,
  PROVINCE_DISPLAY_FAILURE,
  PROVINCE_DISPLAY_END,
} from '../../actionTypes/locationActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case PROVINCE_DISPLAY_START:
      return {
        ...state,
        loading: true,
        message: null,
        locationErrors: null,
      };
    case PROVINCE_DISPLAY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        data: payload.data,
        locationErrors: null,
      };
    case PROVINCE_DISPLAY_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        locationErrors: payload.error,
      };
    case PROVINCE_DISPLAY_END:
      return {
        ...state,
        loading: false,
        message: null,
        locationErrors: null,
      };

    default:
      return null;
  }
};
export default reducer;
