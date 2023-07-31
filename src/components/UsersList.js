// // UserTable.js
import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, editUser } from "../redux/userActions";

class UserTable extends React.Component {
  handleDelete = (userId) => {
    // Handle the delete logic here
    alert("Button works");
    this.props.deleteUserItem(userId);
  };

  handleEdit = (userId) => {
    alert("Edit Button Clicked");
    this.props.editUserItem(userId);
  };

  render() {
    const { users } = this.props;

    return (
      <div className="button">
        <Link to="/">
          <Button>+ Add User</Button>
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th>Sr#</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <Link
                    to={`/edituser/${user.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    <Button onClick={() => this.handleEdit(user.id)}>
                      Edit
                    </Button>
                  </Link>
                  <Button
                    onClick={() => this.handleDelete(user.id)}
                    className="btn btn-sm btn-danger ms-2"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
  deleteUserItem: (id) => dispatch(deleteUser(id)),
  editUserItem: (id) => dispatch(editUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { deleteUser } from "../redux/userActions";

// class UserList extends Component {
//   handleDelete = (id) => {
//     this.props.deleteUser({ id });
//   };

//   render() {
//     const { users } = this.props;

//     return (
//       <>
//         <div className="container">
//           <h2>Crud App with Redux</h2>
//           <div className="top_button_container">
//             <div className="top_button_left">
//               <Link to="/create">
//                 <button className="btn btn-success my-3">Create++</button>
//               </Link>
//             </div>

//             <div className="top_button_right">
//               <Link to="/product">
//                 <button className="btn btn-success my-3">Go to Products</button>
//               </Link>
//             </div>
//           </div>

//           <table className="table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>
//                     <Link to={`/edit/${user.id}`}>
//                       <button className="btn btn-sm btn-primary">Edit</button>
//                     </Link>
//                     <button
//                       onClick={() => this.handleDelete(user.id)}
//                       className="btn btn-sm btn-danger ms-2"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   users: state.users,
// });

// const mapDispatchToProps = {
//   deleteUser,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserList);
