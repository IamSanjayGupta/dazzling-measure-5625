import { AUTH_LOG_IN_SUCCESS, AUTH_LOG_IN_ERROR, AUTH_LOG_OUT } from "./auth.types";
import axios from "axios";

export const loginAPI = (data) => async (dispatch) => {
  try {
    let response = await axios.post("https://authenticator-ven.herokuapp.com/users/login", data);
    dispatch({
      type: AUTH_LOG_IN_SUCCESS,
      payload: response.data.token,
    });
  } catch (error) {
    dispatch({
      type: AUTH_LOG_IN_ERROR,
    });
  }
};

export const logoutAPI = () => ({ type: AUTH_LOG_OUT });
