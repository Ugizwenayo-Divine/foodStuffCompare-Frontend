import { locationActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { DISTRICT_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const getAll = () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: DISTRICT_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: locationActionTypes.DISTRICT_DISPLAY_START,
      onEnd: locationActionTypes.DISTRICT_DISPLAY_END,
      onSuccess: locationActionTypes.DISTRICT_DISPLAY_SUCCESS,
      onFailure: locationActionTypes.DISTRICT_DISPLAY_FAILURE,
    })
  );

  const getAllByProvince = (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${DISTRICT_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: locationActionTypes.DISTRICT_DISPLAY_START,
      onEnd: locationActionTypes.DISTRICT_DISPLAY_END,
      onSuccess: locationActionTypes.DISTRICT_DISPLAY_SUCCESS,
      onFailure: locationActionTypes.DISTRICT_DISPLAY_FAILURE,
    })
  );
  export default { getAll, getAllByProvince};