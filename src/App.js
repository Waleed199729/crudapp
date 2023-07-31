import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ReactiveForm from "./components/ReactiveForm";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ReactiveForm />} />
          <Route path="/userslist" element={<UsersList />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
