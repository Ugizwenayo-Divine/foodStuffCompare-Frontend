import { categoryActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_CATEGORIES_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const addCategory = (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${ALL_CATEGORIES_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: categoryActionTypes.CATEGORY_DELETE_START,
      onEnd: categoryActionTypes.CATEGORY_DELETE_END,
      onSuccess: categoryActionTypes.CATEGORY_DELETE_SUCCESS,
      onFailure: categoryActionTypes.CATEGORY_DELETE_FAILURE,
    })
  );
  export default addCategory;