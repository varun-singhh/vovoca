import { FaAcquisitionsIncorporated } from "react-icons/fa";
import {
  GET_MUSIC,
  GET_MUSIC_SINGLE,
  LOADING,
  GET_LATEST_MUSIC,
  GET_TRENDING_MUSIC,
} from "../actions/type";

const initialState = {
  musics: null,
  music: null,
  loading: true,
  latest_music: null,
  trending_music: null,
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
    case GET_LATEST_MUSIC:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        latest_music: action.payload,
      };
    case GET_TRENDING_MUSIC:
      return {
        ...state,
        loading: false,
        trending_music: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
