import * as action from "./task.types";
const initState = {
  loading: false,
  error: false,
  tasks: [],
};
export const task = (state = initState, { type, payload }) => {
  switch (type) {
    case action.TASK_LOADING:
      return { loading: true, error: false };
    case action.TASK_ERROR:
      return { loading: false, error: true };
    case action.TASK_ADD:
      return { loading: false, error: false, tasks: [...state.tasks, payload] };
    case action.TASK_UPDATE:
      return { loading: false, error: false };

    default:
      return state;
  }
};
