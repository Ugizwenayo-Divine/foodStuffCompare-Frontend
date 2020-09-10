import { productActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_PRODUCTS_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: ALL_PRODUCTS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: productActionTypes.DISPLAY_PRODUCT_START,
      onEnd: productActionTypes.DISPLAY_PRODUCT_END,
      onSuccess: productActionTypes.DISPLAY_PRODUCT_SUCCESS,
      onFailure: productActionTypes.DISPLAY_PRODUCT_FAILURE,
    })
  );
