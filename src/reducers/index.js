import userReducers from './user';
import productReducers from './product';
import landing from './landing';
import order from './order';
import location from './location';
import market from './market';
import category from './category';
const {
  createOrder,
} = order;
const {
  search,
  categories,
  markets,
} = landing;
const {
  displayDistrict,
  displayProvince,
  displaySector,
} = location;
const {
  addMarket,
  deleteMarket,
  updateMarket,
} = market;
const {
  addCategory,
  deleteCategory,
} = category;

const {
  user,
  userLogout,
  allUsers,
  updateUser,
} = userReducers;
const {
  allProducts,
  product,
  deleteProduct,
  updateProduct
} = productReducers;

export default { 
  user, 
  search, 
  product, 
  createOrder, 
  categories, 
  markets,
  displayDistrict,
  displayProvince,
  displaySector,
  addMarket,
  addCategory,
  userLogout,
  allUsers,
  allProducts,
  updateUser,
  deleteCategory,
  deleteMarket,
  updateMarket,
  deleteProduct,
  updateProduct,
 };
