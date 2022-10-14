import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="container pt-5">
      <h4>Login</h4>
      <hr />
      <Link to="/">
        <button className="btn btn-primary">Login</button>
      </Link>
    </div>
  );
};
