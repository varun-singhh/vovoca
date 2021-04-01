import axios from "axios";
import cookie from "js-cookie";
import { GET_MUSIC, LOADING } from "./type";

export const getAllMusic = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const res = await axios.get(
      "https://vovoca.herokuapp.com/api/music/?page=1"
    );
    console.log(res.data);
    dispatch({
      type: GET_MUSIC,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
