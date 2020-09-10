import { productActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_PRODUCTS_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${ALL_PRODUCTS_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: productActionTypes.UPDATE_PRODUCT_START,
      onEnd: productActionTypes.UPDATE_PRODUCT_END,
      onSuccess: productActionTypes.UPDATE_PRODUCT_SUCCESS,
      onFailure: productActionTypes.UPDATE_PRODUCT_FAILURE,
    })
  );
