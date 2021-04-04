import axios from "axios";
import cookie from "js-cookie";
import {
  GET_MUSIC,
  LOADING,
  GET_MUSIC_SINGLE,
  GET_LATEST_MUSIC,
  GET_TRENDING_MUSIC,
} from "./type";

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
