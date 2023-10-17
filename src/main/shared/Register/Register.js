// import React, { useEffect, useState } from "react";

// import CurrentUser from "../../config/user";
// import { useHistory } from "react-router";
// import { useForm } from "react-hook-form";
// import userHTTPService from "../../services/userHTTPService";
// import showMessage from "../../../libraries/messages/messages";
// import User from "../../config/user";
// import axios from "../../../libraries/axios/axios";

// const Register = ({ handleClick }) => {
//   let history = useHistory();
//   //   var userInit = { username: "admin", password: "admin" };
//   const { register, handleSubmit, errors } = useForm();
//   const [user, setUser] = useState("");

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUser({ ...user, [name]: value });
//   };
//   useEffect(() => {}, []);

//   //   const onSubmit = async (data) => {
//   //     try {
//   //       const response = await axios.post("api/user", {
//   //         ...user,
//   //       });
//   //       setUser(response.data); // Store the response data in the component's state
//   //     } catch (error) {
//   //       console.error("Error:", error);
//   //     }
//   //   };

//   const onSubmit = () => {
//     userHTTPService
//       .createUser({
//         // username: user.username,
//         // fullname: user.firstname,
//         // // lastname: user.lastname,
//         // password: user.password,
//         // address: user.address,
//         ...user,
//       })
//       .then((response) => {
//         if (Object.keys(response.data).length !== 0) {
//           handleClick(true);
//           // User.USER_DETAIL = response.data;
//           // localStorage.setItem("connected", true);
//           // history.replace("/dashboard");
//         } else {
//           User.CONNECTED_USER = false;
//           showMessage(
//             "Error",
//             "You have entered an invalid Details",
//             "warning"
//           );
//         }
//       })
//       .catch((e) => {
//         showMessage("Error", "HTTP_ERR_MESSAGE", "warning");
//         console.log(e);
//       });
//   };
//   return (
//     <div
//       className="login-content"
//       style={{ display: !CurrentUser.CONNECTED_USER ? "block" : "none" }}
//     >
//       <div className="login-form">
//         <div className="login-logo">
//           <img className="align-content" src="images/logo.png" alt="" />
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} method="post">
//           <div className="form-group">
//             <label>Fullname</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Fullname"
//               name="fullname"
//               onChange={handleInputChange}
//               value={user.fullname}
//               ref={register({ required: true })}
//             />
//           </div>
//           <div className="form-group">
//             <label>Birth Date</label>
//             <input
//               type="date"
//               className="form-control"
//               placeholder="DOB"
//               name="date"
//               onChange={handleInputChange}
//               value={user.date}
//               ref={register({ required: true })}
//             />
//           </div>
//           <div className="form-group">
//             <label>Address</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Address"
//               name="address"
//               onChange={handleInputChange}
//               value={user.address}
//               ref={register({ required: true })}
//             />
//           </div>
//           <div className="form-group">
//             <label>Telephone</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Telephone"
//               name="telephone"
//               onChange={handleInputChange}
//               value={user.telephone}
//               ref={register({ required: true })}
//             />
//           </div>
//           <div className="form-group">
//             <label>Username</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Username"
//               name="username"
//               onChange={handleInputChange}
//               value={user.username}
//               ref={register({ required: true })}
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               name="password"
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               onChange={handleInputChange}
//               value={user.password}
//               ref={register({ required: true })}
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-success btn-flat m-b-30 m-t-30"
//           >
//             <i class="fas fa-sign-in"></i> Register{" "}
//           </button>
//         </form>
//         <button
//           onClick={() => {
//             history.push("/");
//           }}
//           className="btn btn-success btn-flat m-b-30 m-t-30"
//         >
//           <i class="fas fa-sign-in"></i> SignIn{" "}
//         </button>
//       </div>
//     </div>
//   );
// };

// Register.propTypes = {};

// Register.defaultProps = {};

// export default Register;
