import { marketActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ADD_MARKET_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const addMarket = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: ADD_MARKET_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: marketActionTypes.MARKET_CREATE_START,
      onEnd: marketActionTypes.MARKET_CREATE_END,
      onSuccess: marketActionTypes.MARKET_CREATE_SUCCESS,
      onFailure: marketActionTypes.MARKET_CREATE_FAILURE,
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
  export default addMarket;