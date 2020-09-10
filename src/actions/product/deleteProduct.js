import { productActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_PRODUCTS_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${ALL_PRODUCTS_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: productActionTypes.DELETE_PRODUCT_START,
      onEnd: productActionTypes.DELETE_PRODUCT_END,
      onSuccess: productActionTypes.DELETE_PRODUCT_SUCCESS,
      onFailure: productActionTypes.DELETE_PRODUCT_FAILURE,
    })
  );
