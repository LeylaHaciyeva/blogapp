const RegisterPageForUser = () => {
  return (
    <div className="container d-flex justify-content-center">
      <form className="signupForm">
        <div className="form-group">
          <div className="">
            <label htmlFor="role" className="col-form-label">Role secin</label>
            <br/>
            <select className="w-100" name="role" id="role">
              <option value="admin">Admin</option>
              <option value="user">User</option>
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
