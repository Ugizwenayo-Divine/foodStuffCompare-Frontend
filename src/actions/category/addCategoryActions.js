import { categoryActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ADD_CATEGORY_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const addCategory = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: ADD_CATEGORY_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: categoryActionTypes.CATEGORY_CREATE_START,
      onEnd: categoryActionTypes.CATEGORY_CREATE_END,
      onSuccess: categoryActionTypes.CATEGORY_CREATE_SUCCESS,
      onFailure: categoryActionTypes.CATEGORY_CREATE_FAILURE,
    })
  );

  // const getAllByProvince = (id) => (dispatch) =>
  // dispatch(
  //   apiAction({
  //     method: 'get',
  //     httpOptions: {
  //       token,
  //       URL: `${DISTRICT_URL}/${id}`,
  //       headers: { 'Content-Type': 'application/json' },
  //     },
  //     onStart: locationActionTypes.DISTRICT_CREATE_START,
  //     onEnd: locationActionTypes.DISTRICT_CREATE_END,
  //     onSuccess: locationActionTypes.DISTRICT_CREATE_SUCCESS,
  //     onFailure: locationActionTypes.DISTRICT_CREATE_FAILURE,
  //   })
  // );
  export default addCategory;