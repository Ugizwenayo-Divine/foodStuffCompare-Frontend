import { categoryActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_CATEGORIES_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const getCategory = (name) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${ALL_CATEGORIES_URL}/name?name=${name}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: categoryActionTypes.CATEGORY_DISPLAY_START,
      onEnd: categoryActionTypes.CATEGORY_DISPLAY_END,
      onSuccess: categoryActionTypes.CATEGORY_DISPLAY_SUCCESS,
      onFailure: categoryActionTypes.CATEGORY_DISPLAY_FAILURE,
    })
  );
  export default getCategory;