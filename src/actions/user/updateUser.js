import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { UPDATE_USER_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${UPDATE_USER_URL}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: userActionTypes.USER_UPDATE_START,
      onEnd: userActionTypes.USER_UPDATE_END,
      onSuccess: userActionTypes.USER_UPDATE_SUCCESS,
      onFailure: userActionTypes.USER_UPDATE_FAILURE,
    })
  );
