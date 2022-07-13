import { searchActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { SEARCH_NAME_URL, SEARCH_ALL_URL } from '../../helpers/backendURLs';

const searchAny =  (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        URL: `${SEARCH_NAME_URL}?name=${data.search}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: searchActionTypes.USER_SEARCH_START,
      onEnd: searchActionTypes.USER_SEARCH_END,
      onSuccess: searchActionTypes.USER_SEARCH_SUCCESS,
      onFailure: searchActionTypes.USER_SEARCH_FAILURE,
    })
  );
  const searchAll =  () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        URL: `${SEARCH_ALL_URL}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: searchActionTypes.USER_SEARCH_START,
      onEnd: searchActionTypes.USER_SEARCH_END,
      onSuccess: searchActionTypes.USER_SEARCH_SUCCESS,
      onFailure: searchActionTypes.USER_SEARCH_FAILURE,
    })
  );

  export default {searchAny, searchAll}
