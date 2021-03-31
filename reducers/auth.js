import { USER_LOGIN, LOADING ,USER_LOGIN_FAILED} from '../actions/type';

const initialState = {
  isAuthenticated: false,
  loading: true,
  token: null,
  error:null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: !state.loading,
        token: action.payload.token,
        error:null
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        loading: !state.loading,
        token: null,
        error:action.payload
      };
    default:
      return state;
  }
};
