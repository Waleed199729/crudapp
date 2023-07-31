import React, { Component, Fragment } from "react";
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
} from "react-reactive-form";
import { Link } from "react-router-dom";
import { addUsers, updateUser } from "../redux/userActions";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const TextInput = ({ handler, touched, hasError, meta }) => (
  <div>
    <input placeholder={`Enter ${meta.label}`} {...handler()} />
    <span>
      {touched && hasError("required") && `${meta.label} is required`}
    </span>
  </div>
);

class ReactiveForm extends Component {
  constructor(props) {
    super(props);
  }

  loginForm = FormBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    rememberMe: false,
  });

  handleReset = () => {
    this.loginForm.reset();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form values", this.loginForm.value);

    let newUser = this.loginForm.value;
    newUser.id = Date.now();

    this.props.addUserItem(newUser);

    this.setState({
      username: "",
      password: "",
    });

    this.loginForm.reset();
  };

  render() {
    return (
      <Fragment>
        <FieldGroup
          control={this.loginForm}
          render={({ get, invalid }) => (
            <form onSubmit={this.handleSubmit}>
              <FieldControl
                name="username"
                render={TextInput}
                meta={{ label: "Username" }}
              />

              <FieldControl
                name="password"
                render={TextInput}
                meta={{ label: "Password" }}
              />

              <FieldControl
                name="rememberMe"
                render={({ handler }) => (
                  <div>
                    <input {...handler("checkbox")} />
                  </div>
                )}
              />
              <Button type="button" onClick={this.handleReset}>
                Reset
              </Button>

              <button type="submit" disabled={invalid}>
                Submit
              </button>
              <Link to="/userslist"> Go </Link>
            </form>
          )}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  //redux se data states ki form me nikalwa rahe the
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  addUserItem: (user) => dispatch(addUsers(user)),
  // editUserItem: (userId) => dispatch(updateUser(userId)),
  // editUserItem: (id, updatedUser) => dispatch(userToBeUpdated(id, updatedUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactiveForm);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addUsers } from "../redux/userActions";
// import { withRouter } from "react-router-dom";

// class ReactiveForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//     };
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, email } = this.state;
//     const { users } = this.props;

//     this.props.addUser({
//       id: users.length > 0 ? users[users.length - 1].id + 1 : 0,
//       name,
//       email,
//     });
//     this.props.history.push("/");
//   };

//   render() {
//     const { name, email } = this.state;

//     return (
//       <>
//         <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
//           <div className="w-50 border bg-secondary text-white p-5">
//             <h3>Add New User</h3>
//             <form onSubmit={this.handleSubmit}>
//               <div>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-control"
//                   placeholder="Enter the name"
//                   onChange={(e) => this.setState({ name: e.target.value })}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email">Email:</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   placeholder="Enter the email"
//                   onChange={(e) => this.setState({ email: e.target.value })}
//                 />
//               </div>
//               <br />
//               <button className="btn btn-info">Submit</button>
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   users: state.users,
// });

// const mapDispatchToProps = {
//   addUsers,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(ReactiveForm));
