import { productActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { SEARCH_ANY_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${SEARCH_ANY_URL}?product=${data.product}&market=${data.market}&location=${data.location}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: productActionTypes.DISPLAY_PRODUCT_START,
      onEnd: productActionTypes.DISPLAY_PRODUCT_END,
      onSuccess: productActionTypes.DISPLAY_PRODUCT_SUCCESS,
      onFailure: productActionTypes.DISPLAY_PRODUCT_FAILURE,
    })
  );
