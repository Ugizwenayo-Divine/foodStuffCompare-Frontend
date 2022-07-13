import { locationActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { SECTOR_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const getAllSectors = () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: SECTOR_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: locationActionTypes.SECTOR_DISPLAY_START,
      onEnd: locationActionTypes.SECTOR_DISPLAY_END,
      onSuccess: locationActionTypes.SECTOR_DISPLAY_SUCCESS,
      onFailure: locationActionTypes.SECTOR_DISPLAY_FAILURE,
    })
  );

  const getAllByDistrict = (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${SECTOR_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: locationActionTypes.SECTOR_DISPLAY_START,
      onEnd: locationActionTypes.SECTOR_DISPLAY_END,
      onSuccess: locationActionTypes.SECTOR_DISPLAY_SUCCESS,
      onFailure: locationActionTypes.SECTOR_DISPLAY_FAILURE,
    })
  );
  export default { getAllSectors, getAllByDistrict};