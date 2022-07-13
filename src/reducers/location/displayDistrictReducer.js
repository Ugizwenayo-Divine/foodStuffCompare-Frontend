import {
  DISTRICT_DISPLAY_START,
  DISTRICT_DISPLAY_SUCCESS,
  DISTRICT_DISPLAY_FAILURE,
  DISTRICT_DISPLAY_END,
} from '../../actionTypes/locationActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case DISTRICT_DISPLAY_START:
      return {
        ...state,
        loading: true,
        message: null,
        locationErrors: null,
      };
    case DISTRICT_DISPLAY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        data: payload.data,
        locationErrors: null,
      };
    case DISTRICT_DISPLAY_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        locationErrors: payload.error,
      };
    case DISTRICT_DISPLAY_END:
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
