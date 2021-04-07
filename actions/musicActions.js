import axios from "axios";
import cookie from "js-cookie";
import {
  GET_MUSIC,
  LOADING,
  GET_MUSIC_SINGLE,
  UPLOADED_MUSIC,
  GET_LATEST_MUSIC,
  GET_TRENDING_MUSIC,
  CATEGORISED_MUSIC,
  RESET_CATEGORISED_MUSIC,
} from "./type";
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
  try {
    dispatch({ type: LOADING });
    const res = await axios.get(
      `https://vovoca.herokuapp.com/api/music/trending`
    );
    dispatch({
      type: GET_TRENDING_MUSIC,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getLatestMusic = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const res = await axios.get(
      `https://vovoca.herokuapp.com/api/music/latest`
    );
    console.log(res.data);
    dispatch({
      type: GET_LATEST_MUSIC,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUploadedMusic = (page = 1) => async (dispatch) => {
  console.log(page);
  try {
    setAuthToken(cookie.get("token"));
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

export const getCategorisedMusic = (selected_category, page) => async (
  dispatch
) => {
  console.log("object");
  try {
    const res = await axios.get(
      `https://vovoca.herokuapp.com/api/music/?category=${selected_category.join(
        "+"
      )}&page=${page}`
    );
    dispatch({
      type: CATEGORISED_MUSIC,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const resetCategorisedMusic = () => async (dispatch) => {
  dispatch({
    type: RESET_CATEGORISED_MUSIC,
  });
};
