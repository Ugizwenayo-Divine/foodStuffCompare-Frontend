import { categoryActionTypes, marketActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_CATEGORIES_URL,ALL_MARKETS_URL } from '../../helpers/backendURLs';

  const displayCategory =  () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        URL: `${ALL_CATEGORIES_URL}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: categoryActionTypes.CATEGORY_DISPLAY_START,
      onEnd: categoryActionTypes.CATEGORY_DISPLAY_END,
      onSuccess: categoryActionTypes.CATEGORY_DISPLAY_SUCCESS,
      onFailure: categoryActionTypes.CATEGORY_DISPLAY_FAILURE,
    })
  );
  const displayMarkets =  () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        URL: `${ALL_MARKETS_URL}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: marketActionTypes.MARKET_DISPLAY_START,
      onEnd: marketActionTypes.MARKET_DISPLAY_END,
      onSuccess: marketActionTypes.MARKET_DISPLAY_SUCCESS,
      onFailure: marketActionTypes.MARKET_DISPLAY_FAILURE,
    })
  );

  export default {displayCategory, displayMarkets}
