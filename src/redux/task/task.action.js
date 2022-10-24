import axios from "axios";
import * as action from "./task.types";

export const addTaskAPI = (data) => async (dispatch) => {
  dispatch({ type: action.TASK_LOADING });
  return axios
    .post(`${process.env.REACT_APP_TMETRIC_APP_API}/tasks/addTask`, data)
    .then((res) => dispatch({ type: action.TASK_ADD, payload: res.data }))
    .catch((err) => dispatch({ type: action.TASK_ERROR }));
};

export const updateTaskAPI = (id, data) => async (dispatch) => {
  dispatch({ type: action.TASK_LOADING });
  return axios
    .patch(`${process.env.REACT_APP_TMETRIC_APP_API}/tasks/updateTask/${id}`, data)
    .then((res) => {
      dispatch({ type: action.TASK_UPDATE, payload: { id, data } });
    })
    .catch((err) => {
      dispatch({ type: action.TASK_ERROR });
    });
};

export const deleteTaskAPI = (id) => async (dispatch) => {
  dispatch({ type: action.TASK_LOADING });
  return axios
    .delete(`${process.env.REACT_APP_TMETRIC_APP_API}/tasks/deleteTask/${id}`)
    .then((res) => dispatch({ type: action.TASK_DELETE, payload: id }))
    .catch((err) => dispatch({ type: action.TASK_ERROR }));
};

export const getTasksAPI = () => async (dispatch) => {
  dispatch({ type: action.TASK_LOADING });
  return axios
    .get(`${process.env.REACT_APP_TMETRIC_APP_API}/tasks/getTask`)
    .then((res) => dispatch({ type: action.TASK_GET_TASK, payload: res.data }))
    .catch((err) => dispatch({ type: action.TASK_ERROR }));
};

// Render shutdown the server in 15 min of inactivity and takes 30 seconds to start it again.
// This action will triger the endpoint when user visit to homepage so that
// user may not face delay of 30 seconds.

export const initEndPoint = () => async (dispatch) => {
  axios.get(`${process.env.REACT_APP_TMETRIC_APP_API}`).catch((e) => console.log(e));
};
