import { marketActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_MARKETS_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const getMarket = (name) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${ALL_MARKETS_URL}/name?name=${name}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: marketActionTypes.MARKET_DISPLAY_START,
      onEnd: marketActionTypes.MARKET_DISPLAY_END,
      onSuccess: marketActionTypes.MARKET_DISPLAY_SUCCESS,
      onFailure: marketActionTypes.MARKET_DISPLAY_FAILURE,
    })
  );
  export default getMarket;