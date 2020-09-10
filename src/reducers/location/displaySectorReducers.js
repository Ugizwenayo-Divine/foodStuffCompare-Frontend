import {
  SECTOR_DISPLAY_START,
  SECTOR_DISPLAY_SUCCESS,
  SECTOR_DISPLAY_FAILURE,
  SECTOR_DISPLAY_END,
} from '../../actionTypes/locationActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SECTOR_DISPLAY_START:
      return {
        ...state,
        loading: true,
        message: null,
        locationErrors: null,
      };
    case SECTOR_DISPLAY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        data: payload.data,
        locationErrors: null,
      };
    case SECTOR_DISPLAY_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        locationErrors: payload.error,
      };
    case SECTOR_DISPLAY_END:
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
