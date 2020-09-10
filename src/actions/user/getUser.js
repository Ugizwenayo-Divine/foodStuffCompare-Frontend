import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { GET_USER_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (email) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${GET_USER_URL}/${email}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: userActionTypes.USER_DISPLAY_START,
      onEnd: userActionTypes.USER_DISPLAY_END,
      onSuccess: userActionTypes.USER_DISPLAY_SUCCESS,
      onFailure: userActionTypes.USER_DISPLAY_FAILURE,
    })
  );
