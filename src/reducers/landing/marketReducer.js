import {
    MARKET_DISPLAY_END,
    MARKET_DISPLAY_FAILURE,
    MARKET_DISPLAY_START,
    MARKET_DISPLAY_SUCCESS,
  } from '../../actionTypes/marketActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case MARKET_DISPLAY_START:
        return {
          ...state,
          loading: true,
          marketErrors: null,
          message: null,
        };
      case MARKET_DISPLAY_SUCCESS:
        return {
          ...state,
          loading: false,
          marketErrors: null,
          message: payload.message,
          markets: payload.data,
        };
      case MARKET_DISPLAY_FAILURE:
        return {
          ...state,
          loading: false,
          marketErrors: payload.error,
          message: null,
        };
      case MARKET_DISPLAY_END:
        return {
          ...state,
          loading: false,
          marketErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  