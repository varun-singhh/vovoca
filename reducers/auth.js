import { USER_LOGIN, LOADING ,USER_LOGIN_FAILED,LOAD_USER} from '../actions/type';

const initialState = {
  isAuthenticated: false,
  loading: false,
  token: null,
  data:null,
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
        data:action.payload,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        loading: !state.loading,
        token: null,
        data:null,
      };
    default:
      return state;
  }
};
