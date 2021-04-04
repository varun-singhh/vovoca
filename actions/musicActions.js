import axios from "axios";
import { GET_MUSIC, LOADING, UPLOADED_MUSIC, GET_MUSIC_SINGLE } from "./type";
import setAuthToken from "./utils/setAuthToken";

export const getAllMusic = (page) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const res = await axios.get(
      `https://vovoca.herokuapp.com/api/music/?page=${page}&limit=5`
    );
    dispatch({
      type: GET_MUSIC,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleMusic = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const res = await axios.get(`https://vovoca.herokuapp.com/api/music/${id}`);
    dispatch({
      type: GET_MUSIC_SINGLE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingMusic = () => async (dispatch) => {
  try {    const res = await axios.get(
      `https://vovoca.herokuapp.com/api/music/trending`
    );
    dispatch({
      type: GET_MUSIC,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUploadedMusic = (page = 1) => async (dispatch) => {
  console.log(page);
  try {
    setAuthToken(localStorage.getItem("token"))
    const res = await axios.get(
      `https://vovoca.herokuapp.com/api/admin/uploaded?page=${page}`
    );
    console.log(res.data.data);
    dispatch({
      type: UPLOADED_MUSIC,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
