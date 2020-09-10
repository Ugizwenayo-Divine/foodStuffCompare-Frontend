import initialState from '../../store/initialState';
import orderReducer from './createOrderReducer';

const createOrder = (state = initialState, action) => {
  const order = orderReducer(state, action);

  return order || state;
};

export default {createOrder};
