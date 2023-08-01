// import { useState } from "react";
const RegisterPageForUser = () => {
  // const [userData, setUserData] = useState({
  //   "firstname":"",
  //   "lastname":"",
  //   "email":"",
  //   "password":"",
  //   "role":null
  // });
  const registerUser = (e) => {
    e.preventDefault();
    // setUserData({
    //   firstname: e.target.firstname.value,
    //   lastname: e.target.lastname.value,
    //   email: e.target.email.value,
    //   password: e.target.password.value,
    //   role: e.target.role.value
    // });
    fetch("http://localhost:8080/api/v1/auth/register", {
      method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
          email: e.target.email.value,
          password: e.target.password.value,
          role: e.target.role.value
        })
    })
  };
  return (
    <div className="container d-flex justify-content-center">
      <form className="signupForm" onSubmit={(e) => registerUser(e)}>
        <div className="form-group">
          <div className="">
            <label htmlFor="role" className="col-form-label">
              Role secin
            </label>
            <br />
            <select className="w-100" name="role" id="role">
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="userName" className=" col-form-label">
            Your name
          </label>
          <div className="">
            <input
              required
              name="firstname"
              type="text"
              className=""
              id="userName"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="userSurName" className=" col-form-label">
            Your surname
          </label>
          <div className="">
            <input
              required
              name="lastname"
              type="text"
              className=""
              id="userSurName"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="userEmail" className=" col-form-label">
            Your email
          </label>
          <div className="">
            <input
              required
              name="email"
              type="text"
              className=""
              id="userEmail"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="userPass" className=" col-form-label">
            Your password
          </label>
          <div className="">
            <input
              required
              name="password"
              type="password"
              className=""
              id="userPass"
            />
          </div>
        </div>
        <button>sign up</button>
      </form>
    </div>
  );
};

export default RegisterPageForUser;
