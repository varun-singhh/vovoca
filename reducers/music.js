import { GET_MUSIC, GET_MUSIC_SINGLE, UPLOADED_MUSIC, LOADING } from "../actions/type";

const initialState = {
  musics: null,
  music: null,
  loading: true,
  uploaded: null
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
      case UPLOADED_MUSIC:
        return {
          ...state,
          loading: false,
          uploaded: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
