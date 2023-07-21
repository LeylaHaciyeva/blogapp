import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header  bg-light mb-5 pl-5 pr-5 d-flex justify-content-between align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Logo</h1>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/create-blog">Create blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
