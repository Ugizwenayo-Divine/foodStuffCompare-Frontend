import initialState from '../../store/initialState';
import orderReducer from './createOrderReducer';
import paymentReducer from './orderPaymentReducer';
import clientOrdersReducer from './clientOrdersReducer';
import allOrdersReducer from './allOrdersReducer';
import searchOrderReducer from './searchOrder';
import cancelOrderReducer from './cancelOrderReducer';
import deliverOrderReducer from './deliverOrderReducer';

const order = (state = initialState, action) => {
  const order = orderReducer(state, action);

  return order || state;
};
const payment = (state = initialState, action) => {
  const order = paymentReducer(state, action);

  return order || state;
};
const clientOrders = (state = initialState, action) => {
  const order = clientOrdersReducer(state, action);

  return order || state;
};
const allOrders = (state = initialState, action) => {
  const order = allOrdersReducer(state, action);

  return order || state;
};
const searchOrder = (state = initialState, action) => {
  const order = searchOrderReducer(state, action);

  return order || state;
};
const cancelOrder = (state = initialState, action) => {
  const order = cancelOrderReducer(state, action);

  return order || state;
};
const deliverOrder = (state = initialState, action) => {
  const order = deliverOrderReducer(state, action);

  return order || state;
};

export default {order, payment, clientOrders, allOrders, searchOrder, cancelOrder, deliverOrder};
