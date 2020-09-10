import {
  MARKET_UPDATE_START,
  MARKET_UPDATE_SUCCESS,
  MARKET_UPDATE_FAILURE,
  MARKET_UPDATE_END,
} from '../../actionTypes/marketActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case MARKET_UPDATE_START:
      return {
        ...state,
        loading: true,
        message: null,
        marketErrors: null,
      };
    case MARKET_UPDATE_SUCCESS:
			window.location.replace('/displaymarket');
      return {
        ...state,
        loading: false,
        message: payload.message,
        marketErrors: null,
      };
    case MARKET_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        marketErrors: payload.error,
      };
    case MARKET_UPDATE_END:
      return {
        ...state,
        loading: false,
        message: null,
        marketErrors: null,
      };

    default:
      return null;
  }
};
export default reducer;
