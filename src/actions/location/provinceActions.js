import { locationActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { PROVINCE_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const getAllProvinces = () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: PROVINCE_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: locationActionTypes.PROVINCE_DISPLAY_START,
      onEnd: locationActionTypes.PROVINCE_DISPLAY_END,
      onSuccess: locationActionTypes.PROVINCE_DISPLAY_SUCCESS,
      onFailure: locationActionTypes.PROVINCE_DISPLAY_FAILURE,
    })
  );
  export default { getAllProvinces};