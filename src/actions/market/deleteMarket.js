import { marketActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { DELETE_MARKET_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const deleteMarket = (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${DELETE_MARKET_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: marketActionTypes.MARKET_DELETE_START,
      onEnd: marketActionTypes.MARKET_DELETE_END,
      onSuccess: marketActionTypes.MARKET_DELETE_SUCCESS,
      onFailure: marketActionTypes.MARKET_DELETE_FAILURE,
    })
  );

  export default deleteMarket;