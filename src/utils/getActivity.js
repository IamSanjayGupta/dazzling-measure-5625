export const getActivity = (type, data) => {
  switch (type) {
    case "project":
      return `changed the project to ${data}`;
    case "assignee":
      return `assigned this task to ${data}`;
    case "due_date":
      return `changed the due_date to ${data}`;
    case "estimate":
      return `changed the estimate to ${data}`;
    case "tag":
      return `changed the tag to ${data}`;
  }
};
