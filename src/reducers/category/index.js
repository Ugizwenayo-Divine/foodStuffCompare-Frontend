import initialState from '../../store/initialState';
import addCategoryReducer from './addCategory';
import deleteCategoryReducer from './deleteCategory';

const addCategory = (state = initialState, action) => {
  const category = addCategoryReducer(state, action);

  return category || state;
};
const deleteCategory = (state = initialState, action) => {
  const category = deleteCategoryReducer(state, action);

  return category || state;
};

export default {addCategory, deleteCategory};
