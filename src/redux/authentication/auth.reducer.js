import {
    AUTH_LOG_IN_SUCCESS,
    AUTH_LOG_IN_ERROR,
    AUTH_LOG_OUT,
  } from "./auth.types";

export const authInitalState = {
    loading: false,
    data: {
      token: "",
      isAuthenticated: false,
    },
    error: false,
  };
  
  export const authReducer = (state = authInitalState, { type, payload }) => {
    switch (type) {
      case AUTH_LOG_IN_SUCCESS: {
        console.log("logged in successfully")
        return {
          ...state,
          loading: false,
          data: {
            ...state.data,
            token: payload,
            isAuthenticated: true,
          }
        };
      }
      case AUTH_LOG_IN_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case AUTH_LOG_OUT: {
        console.log("logging out")
        return {
          ...state,
          data: {
            ...state.data,
            token: "",
            isAuthenticated: false,
          },
        };
      }
  
      default: {
        return state;
      }
    }
  };
  