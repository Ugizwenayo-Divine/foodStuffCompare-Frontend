import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { LOGIN_URL } from '../../helpers/backendURLs';

export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        URL: LOGIN_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: userActionTypes.USER_LOGIN_START,
      onEnd: userActionTypes.USER_LOGIN_END,
      onSuccess: userActionTypes.USER_LOGIN_SUCCESS,
      onFailure: userActionTypes.USER_LOGIN_FAILURE,
    })
  );
