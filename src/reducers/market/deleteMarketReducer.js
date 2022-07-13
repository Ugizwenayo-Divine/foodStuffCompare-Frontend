import {
  MARKET_DELETE_START,
  MARKET_DELETE_SUCCESS,
  MARKET_DELETE_FAILURE,
  MARKET_DELETE_END,
} from '../../actionTypes/marketActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case MARKET_DELETE_START:
      return {
        ...state,
        loading: true,
        message: null,
        marketErrors: null,
      };
    case MARKET_DELETE_SUCCESS:
			window.location.replace('/displaymarket')
      return {
        ...state,
        loading: false,
        message: payload.message,
        marketErrors: null,
      };
    case MARKET_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        marketErrors: payload.error,
      };
    case MARKET_DELETE_END:
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
