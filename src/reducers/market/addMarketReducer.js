import {
  MARKET_CREATE_START,
  MARKET_CREATE_SUCCESS,
  MARKET_CREATE_FAILURE,
  MARKET_CREATE_END,
} from '../../actionTypes/marketActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case MARKET_CREATE_START:
      return {
        ...state,
        loading: true,
        message: null,
        marketErrors: null,
      };
    case MARKET_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        markets: payload.data,
        marketErrors: null,
      };
    case MARKET_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        marketErrors: payload.error,
      };
    case MARKET_CREATE_END:
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
