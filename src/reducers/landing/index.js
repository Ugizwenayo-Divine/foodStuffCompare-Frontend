import initialState from '../../store/initialState';
import searchReducer from './searchReducer';
import categoryReducer from './categoryReducer';
import marketReducer from './marketReducer';

const search = (state = initialState, action) => {
  const search = searchReducer(state, action);

  return search || state;
};
const categories = (state = initialState, action) => {
  const search = categoryReducer(state, action);

  return search || state;
};
const markets = (state = initialState, action) => {
  const bestProducts = marketReducer(state, action);

  return bestProducts || state;
};
 export default {search, categories, markets};