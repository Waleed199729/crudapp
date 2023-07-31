import { combineReducers, createStore } from "redux";
import UserReducer from "./redux/userReducers"; //1st reducer
import { composeWithDevTools } from "redux-devtools-extension";

const mainReducer = combineReducers({
  users: UserReducer, //user name se call hoga userReducer
  //   student: studentReducer, //student name se call hoga studentReducer
});

const store = createStore(mainReducer, composeWithDevTools());

export default store;
