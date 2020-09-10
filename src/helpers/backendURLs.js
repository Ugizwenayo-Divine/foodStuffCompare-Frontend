const BASE_URL = 'https://rica-inc.herokuapp.com/api';
const LOCAL_URL = 'http://localhost:3000/api';
const SIGNUP_URL = `${LOCAL_URL}/auth/signup`;
const LOGIN_URL = `${LOCAL_URL}/auth/login`;
const ADD_PRODUCT_URL = `${LOCAL_URL}/product/add`;
const SEARCH_NAME_URL = `${LOCAL_URL}/product/searchAny`;
const SEARCH_ALL_URL = `${LOCAL_URL}/product/`;
const ALL_CATEGORIES_URL = `${LOCAL_URL}/category`;
const ALL_MARKETS_URL = `${LOCAL_URL}/market`;
const EXTERNAL_ADVERTISEMENT_URL = `${LOCAL_URL}/advertisement/external`;
const ANNOUNCEMENT_URL = `${LOCAL_URL}/announcement`;
const BEST_PRODUCT_URL = `${LOCAL_URL}/product/product-type`;
const ORDER_URL = `${LOCAL_URL}/order/add`;
const PROVINCE_URL = `${LOCAL_URL}/location/province`;
const DISTRICT_URL = `${LOCAL_URL}/location/district`;
const SECTOR_URL = `${LOCAL_URL}/location/sector`;
const ADD_MARKET_URL = `${LOCAL_URL}/market/add`;
const ADD_CATEGORY_URL = `${LOCAL_URL}/category/add`;
const USER_LOGOUT_URL = `${LOCAL_URL}/auth/logout`;
const ALL_USERS_URL = `${LOCAL_URL}/auth/all`;
const UPDATE_USER_URL = `${LOCAL_URL}/auth/update-user`;
const ALL_PRODUCTS_URL = `${LOCAL_URL}/product`;
const GET_USER_URL = `${LOCAL_URL}/auth`;
const DELETE_MARKET_URL = `${LOCAL_URL}/market`;
const SEARCH_ANY_URL = `${LOCAL_URL}/product/any`;
const ORDER_PAYMENT_URL = `${LOCAL_URL}/order/pay`;
const CANCEL_ORDER_URL = `${LOCAL_URL}/order/cancel`;
const CLIENT_ORDERS_URL = `${LOCAL_URL}/order/client-orders`;
const ALL_ORDERS_URL = `${LOCAL_URL}/order`;
const SEARCH_ORDER_URL = `${LOCAL_URL}/order/status-based`;
const DELIVER_ORDER_URL = `${LOCAL_URL}/order/delivered`;
;
export { 
    BASE_URL,
    LOCAL_URL,
    SIGNUP_URL,
    SEARCH_NAME_URL,
    SEARCH_ALL_URL,
    LOGIN_URL,
    ANNOUNCEMENT_URL,
    EXTERNAL_ADVERTISEMENT_URL,
    BEST_PRODUCT_URL,
    ADD_PRODUCT_URL,
    ORDER_URL,
    ALL_CATEGORIES_URL,
    ALL_MARKETS_URL,
    PROVINCE_URL,
    DISTRICT_URL,
    SECTOR_URL,
    ADD_MARKET_URL,
    ADD_CATEGORY_URL,
    USER_LOGOUT_URL,
    ALL_USERS_URL,
    ALL_PRODUCTS_URL,
    UPDATE_USER_URL,
    GET_USER_URL,
    DELETE_MARKET_URL,
    SEARCH_ANY_URL,
    ALL_ORDERS_URL,
    CANCEL_ORDER_URL,
    CLIENT_ORDERS_URL,
    DELIVER_ORDER_URL,
    ORDER_PAYMENT_URL,
    SEARCH_ORDER_URL,
};
