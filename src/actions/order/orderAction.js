import { orderActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { 
  ORDER_URL,
  CLIENT_ORDERS_URL, 
  ALL_ORDERS_URL,
  SEARCH_ORDER_URL,
  CANCEL_ORDER_URL,
  DELIVER_ORDER_URL,
 } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
const addOrder = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: ORDER_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: orderActionTypes.ORDER_PRODUCT_START,
      onEnd: orderActionTypes.ORDER_PRODUCT_END,
      onSuccess: orderActionTypes.ORDER_PRODUCT_SUCCESS,
      onFailure: orderActionTypes.ORDER_PRODUCT_FAILURE,
    })
  );
  const getClientOrders= (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: CLIENT_ORDERS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: orderActionTypes.CLIENT_ORDERS_START,
      onEnd: orderActionTypes.CLIENT_ORDERS_END,
      onSuccess: orderActionTypes.CLIENT_ORDERS_SUCCESS,
      onFailure: orderActionTypes.CLIENT_ORDERS_FAILURE,
    })
  );
  const getAllOrders= (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: ALL_ORDERS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: orderActionTypes.DISPLAY_ORDERS_START,
      onEnd: orderActionTypes.DISPLAY_ORDERS_END,
      onSuccess: orderActionTypes.DISPLAY_ORDERS_SUCCESS,
      onFailure: orderActionTypes.DISPLAY_ORDERS_FAILURE,
    })
  );
  const getOrder= (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${SEARCH_ORDER_URL}?status=${data}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: orderActionTypes.DISPLAY_ORDERS_START,
      onEnd: orderActionTypes.DISPLAY_ORDERS_END,
      onSuccess: orderActionTypes.DISPLAY_ORDERS_SUCCESS,
      onFailure: orderActionTypes.DISPLAY_ORDERS_FAILURE,
    })
  );
  const cancelOrder= (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${CANCEL_ORDER_URL}/${data}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: orderActionTypes.CANCEL_ORDER_START,
      onEnd: orderActionTypes.CANCEL_ORDER_END,
      onSuccess: orderActionTypes.CANCEL_ORDER_SUCCESS,
      onFailure: orderActionTypes.CANCEL_ORDER_FAILURE,
    })
  );
  const deliverOrder= (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${DELIVER_ORDER_URL}/${data}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: orderActionTypes.DELIVER_ORDER_START,
      onEnd: orderActionTypes.DELIVER_ORDER_END,
      onSuccess: orderActionTypes.DELIVER_ORDER_SUCCESS,
      onFailure: orderActionTypes.DELIVER_ORDER_FAILURE,
    })
  );

  export default {addOrder, getClientOrders, getAllOrders,getOrder, cancelOrder,deliverOrder}