import { USER_LOGIN_FAILED,LOADING } from '../actions/type';

const initialState = {
  loading: true,
  err:null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        loading: !state.loading,
        err: action.payload,
      };
    default:
      return state;
  }
}
