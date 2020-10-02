import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [
        ...state,
        {
          title: action.payload[0],
          id: `${Math.floor(Math.random() * 9999) * 968}`,
          description: action.payload[1],
        },
      ];
    case "DELETE_BLOG":
      return state.filter((item) => item.id !== action.payload);
    case "EDIT_BLOG":
      const newState = state.filter((item) => item.id !== action.payload[2]);

      return [
        ...newState,
        {
          title: action.payload[0],
          id: action.payload[2],
          description: action.payload[1],
        },
      ];
    default:
      return state;
  }
};
const addBlogposts = (dispatch) => {
  return (title, descrp) => {
    dispatch({ type: "ADD_BLOG", payload: [title, descrp] });
  };
};

const deleteBlog = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOG", payload: id });
  };
};

const editBlog = (dispatch) => {
  return (title, descrp, id) => {
    dispatch({ type: "EDIT_BLOG", payload: [title, descrp, id] });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogposts, deleteBlog, editBlog },
  []
);
