import { orderActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ORDER_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: ORDER_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: orderActionTypes.ORDER_PRODUCT_START,
      onEnd: orderActionTypes.ORDER_PRODUCT_END,
      onSuccess: orderActionTypes.ORDER_PRODUCT_SUCCESS,
      onFailure: orderActionTypes.ORDER_PRODUCT_FAILURE,
    })
  );
