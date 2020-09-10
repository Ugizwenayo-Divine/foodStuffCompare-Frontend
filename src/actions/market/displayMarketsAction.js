import { marketActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_MARKETS_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const getAllMarket = () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: ALL_MARKETS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: marketActionTypes.MARKET_DISPLAY_START,
      onEnd: marketActionTypes.MARKET_DISPLAY_END,
      onSuccess: marketActionTypes.MARKET_DISPLAY_SUCCESS,
      onFailure: marketActionTypes.MARKET_DISPLAY_FAILURE,
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
  //     onStart: locationActionTypes.DISTRICT_DISPLAY_START,
  //     onEnd: locationActionTypes.DISTRICT_DISPLAY_END,
  //     onSuccess: locationActionTypes.DISTRICT_DISPLAY_SUCCESS,
  //     onFailure: locationActionTypes.DISTRICT_DISPLAY_FAILURE,
  //   })
  // );
  export default getAllMarket;