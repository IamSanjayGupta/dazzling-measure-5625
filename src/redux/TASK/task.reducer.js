import * as action from "./task.types";
const initState = {
  loading: false,
  error: false,
  tasks: [],
  selectTask: {},
};
export const taskReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case action.TASK_LOADING:
      return { ...state, loading: true, error: false };
    case action.TASK_ERROR:
      return { ...state, loading: false, error: true };
    case action.TASK_ADD:
      return { ...state, loading: false, error: false, tasks: [...state.tasks, payload] };
    case action.TASK_DELETE:
      let updatedTask = state.tasks.filter((el) => el.id !== payload);
      return { ...state, loading: false, error: false, tasks: updatedTask };
    case action.TASK_UPDATE:
      let newData = state.tasks.map((el) => (el.id === payload.id ? payload.data : el));
      return { ...state, loading: false, error: false, tasks: newData };
    case action.TASK_GET_TASK:
      return { ...state, loading: false, error: false, tasks: payload };
    case action.TASK_SET_SELECTED_TASK:
      return { ...state, loading: false, error: false, selectTask: payload };

    default:
      return state;
  }
};
