import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../redux/userActions";
import { Link } from "react-router-dom";

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    const { editingUser } = this.props;
    debugger;
    if (editingUser.length) {
      this.setState({
        username: editingUser[0].username,
        password: editingUser[0].password,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    alert("save button clicked");

    const { editingUser } = this.props;
    debugger;
    const updatedUser = {
      id: editingUser[0].id,
      username: this.state.username,
      password: this.state.password,
    };
    this.props.updateUserItem(updatedUser);
    debugger;
  };

  render() {
    return (
      <div>
        <h2>Edit User</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              control={this.loginForm}
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              control={this.loginForm}
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <Link to="/userslist">
            <button onClick={() => this.handleSubmit()}>Save</button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editingUser: state.users.editingUser,
});
// const mapStateToProps = (state) => ({
//   users: state.users.editingUser,
// });

const mapDispatchToProps = (dispatch) => ({
  updateUserItem: (user) => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
