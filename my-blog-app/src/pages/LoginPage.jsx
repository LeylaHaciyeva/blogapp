
const LoginPage = () => {
  return (
    <div>
       <div className="container d-flex justify-content-center">
            <form className="signinForm">
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