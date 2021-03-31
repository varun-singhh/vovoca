import axios from 'axios';
import { USER_LOGIN, LOADING, USER_LOGIN_FAILED } from './type';

export const loginUser = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'Application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  console.log(body);
  try {
    dispatch({ type: LOADING });
    const res = await axios.post(
      'https://vovoca.herokuapp.com/api/admin/login',
      body,
      config
    );
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    dispatch({ type: USER_LOGIN_FAILED, payload: err.response.data });
  }
};

export const registerUser = async (username, email, password) => {
  const config = {
    headers: {
      'Content-Type': 'Application/json',
    },
  };

  // request Body
  const body = JSON.stringify({ username, email, password });
  try {
    const res = await axios.post(
      'https://vovoca.herokuapp.com/api/admin/register',
      body,
      config
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
    return err?.response.data;
  }
};
