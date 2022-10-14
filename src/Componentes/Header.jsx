import { Link, useNavigate, NavLink } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-primary ${isActive && "text-light"}`
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-primary ${isActive && "text-light"}`
                }
                aria-current="page"
                to="/marvel"
              >
                Marvel Comics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-primary ${isActive && "text-light"}`
                }
                to="/dc"
              >
                Dc Comics
              </NavLink>
            </li>
          </ul>
          <div className="text-center">
            <div onClick={Logout} className="text-primary">
              Logout
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
