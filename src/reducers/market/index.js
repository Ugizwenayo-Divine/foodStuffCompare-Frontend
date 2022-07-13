import initialState from '../../store/initialState';
import addMarketReducer from './addMarketReducer';
import deleteMarketReducer from './deleteMarketReducer';
import updateMarketReducer from './updateMarketReducer';

const addMarket = (state = initialState, action) => {
  const market = addMarketReducer(state, action);

  return market || state;
};
const deleteMarket = (state = initialState, action) => {
  const market = deleteMarketReducer(state, action);

  return market || state;
};
const updateMarket = (state = initialState, action) => {
  const market = updateMarketReducer(state, action);

  return market || state;
};

export default {addMarket, deleteMarket, updateMarket};
