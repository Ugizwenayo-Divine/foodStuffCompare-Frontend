import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_USERS_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: ALL_USERS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: userActionTypes.USER_DISPLAY_START,
      onEnd: userActionTypes.USER_DISPLAY_END,
      onSuccess: userActionTypes.USER_DISPLAY_SUCCESS,
      onFailure: userActionTypes.USER_DISPLAY_FAILURE,
    })
  );
