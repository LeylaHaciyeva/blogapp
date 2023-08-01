// import {useState} from 'react'
const LoginPage = () => {
    // const [userData, setUserData] = useState({
    //     "email":"",
    //     "password":"",
    //   });
      const loginUser = (e) => {
        e.preventDefault();
        // setUserData({
        //   email: e.target.email.value,
        //   password: e.target.password.value,
        // });
        fetch("http://localhost:8080/api/v1/auth/authenticate", {
          method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
              email: e.target.email.value,
              password: e.target.password.value,
            })
        })
      };
  return (
    <div>
       <div className="container d-flex justify-content-center">
            <form className="signinForm" onSubmit={(e) => loginUser(e)}>
                <div className="form-group">
                    <label htmlFor="userEmail" className=" col-form-label">Your email</label>
                    <div className="">
                        <input required name="email" type="text" className="" id="userEmail"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="userPass" className=" col-form-label">Your password</label>
                    <div className="">
                        <input required name="password" type="password" className="" id="userPass" />
                    </div>
                </div>
                <button>sign in</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage