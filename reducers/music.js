import { GET_MUSIC, GET_MUSIC_SINGLE, LOADING } from "../actions/type";

const initialState = {
  musics: null,
  music: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MUSIC:
      return {
        ...state,
        loading: false,
        musics: action.payload,
      };
    case GET_MUSIC_SINGLE:
      return {
        ...state,
        loading: false,
        music: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
