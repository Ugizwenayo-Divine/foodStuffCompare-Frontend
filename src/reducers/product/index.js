import initialState from '../../store/initialState';
import newProductReducer from './newProductReducer';
import allProductsReducer from './allProductsReducer';
import deleteProductReducer from './deleteProduct';
import updateProductReducer from './updateProduct';

const product = (state = initialState, action) => {
  const newProduct = newProductReducer(state, action);

  return newProduct || state;
};

const allProducts = (state = initialState, action) => {
  const product = allProductsReducer(state, action);

  return product || state;
};
const deleteProduct = (state = initialState, action) => {
  const product = deleteProductReducer(state, action);

  return product || state;
};
const updateProduct = (state = initialState, action) => {
  const product = updateProductReducer(state, action);

  return product || state;
};

export default {allProducts, product, deleteProduct, updateProduct};