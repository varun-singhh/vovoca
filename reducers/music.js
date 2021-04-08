import { FaAcquisitionsIncorporated } from "react-icons/fa";
import {
  GET_MUSIC,
  GET_MUSIC_SINGLE,
  LOADING,
  GET_LATEST_MUSIC,
  GET_TRENDING_MUSIC,
  UPLOADED_MUSIC,
  CATEGORISED_MUSIC,
  RESET_CATEGORISED_MUSIC,
  SET_ERROR,
} from "../actions/type";

const initialState = {
  musics: null,
  music: null,
  loading: true,
  uploaded: null,
  latest_music: null,
  trending_music: null,
  categorised_music: null,
  totalPages: null,
  error: null,
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
    case GET_LATEST_MUSIC:
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
    case CATEGORISED_MUSIC:
      return {
        ...state,
        categorised_music: action.payload.data,
        totalPages: action.payload.totalPages,
      };
    case RESET_CATEGORISED_MUSIC:
      return {
        ...state,
        categorised_music: null,
        totalPages: 1,
      };
    case SET_ERROR:
      return {
        ...state,
        error: "No Music Founded",
      };
    default:
      return state;
  }
};

export default reducer;
