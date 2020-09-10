import { paymentActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ORDER_PAYMENT_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: `${ORDER_PAYMENT_URL}/${data.id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: paymentActionTypes.PAYMENT_START,
      onEnd: paymentActionTypes.PAYMENT_END,
      onSuccess: paymentActionTypes.PAYMENT_SUCCESS,
      onFailure: paymentActionTypes.PAYMENT_FAILURE,
    })
  );
