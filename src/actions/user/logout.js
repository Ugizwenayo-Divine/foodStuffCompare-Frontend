import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { USER_LOGOUT_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
console.log('lll',token);
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token:data,
        URL: USER_LOGOUT_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: userActionTypes.USER_LOGOUT_START,
      onEnd: userActionTypes.USER_LOGOUT_END,
      onSuccess: userActionTypes.USER_LOGOUT_SUCCESS,
      onFailure: userActionTypes.USER_LOGOUT_FAILURE,
    })
  );