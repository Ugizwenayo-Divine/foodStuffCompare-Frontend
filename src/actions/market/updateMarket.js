import { marketActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { DELETE_MARKET_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const updateMarket = (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${DELETE_MARKET_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: marketActionTypes.MARKET_UPDATE_START,
      onEnd: marketActionTypes.MARKET_UPDATE_END,
      onSuccess: marketActionTypes.MARKET_UPDATE_SUCCESS,
      onFailure: marketActionTypes.MARKET_UPDATE_FAILURE,
    })
  );

  export default updateMarket;