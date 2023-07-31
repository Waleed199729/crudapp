import { ADD_USER, UPDATE_USER, DELETE_USER, EDIT_USER } from "./userActions";

const initialState = {
  users: [], // Initialize as an empty array
  editingUser: null,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      // debugger;
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case EDIT_USER:
      debugger;
      return {
        ...state,
        editingUser: state.users.filter((user) => user.id === action.payload), //action.payload me updated data hoga r isi return krwa dein ge
      };
    case UPDATE_USER:
      debugger;
      return {
        ...state,
        users: state.users.filter((user) =>
          user.id === action.payload ? action.payload : null
        ),
        editingUser: [],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};

export default UserReducer;
