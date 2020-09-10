import {
  USER_LOGIN_END,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_START,
} from '../../actionTypes/userActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_START:
      return {
        ...state,
        loading: true,
        loginErrors: null,
      };
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      localStorage.setItem('user',JSON.stringify(payload.data));
      return {
        ...state,
        loading: false,
        token: payload.token,
        data:payload.data,
        loginErrors: null,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loginErrors: payload.error,
      };
    case USER_LOGIN_END:
      return {
        ...state,
        loading: false,
        loginErrors: null,
      };

    default:
      return null;
  }
};
export default reducer;
