import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { SIGNUP_URL } from '../../helpers/backendURLs';

export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        URL: SIGNUP_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: userActionTypes.USER_SIGNUP_START,
      onEnd: userActionTypes.USER_SIGNUP_END,
      onSuccess: userActionTypes.USER_SIGNUP_SUCCESS,
      onFailure: userActionTypes.USER_SIGNUP_FAILURE,
    })
  );
