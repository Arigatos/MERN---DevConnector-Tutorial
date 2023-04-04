import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectIsAuthenticated, selectIsLoading } from "store/auth/selectors";

import { logout } from "store/auth/actions";

const Navbar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutUser = () => {
    console.log("here1");
    dispatch(logout());
    console.log("here2");
  };
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>

      {isAuthenticated && !isLoading ? (
        <ul>
          <li>
            <Link to="/dashboard">
              <i className="fas fa-user"></i>Dashboard
            </Link>
          </li>
          <li>
            <a onClick={logoutUser} href="#!">
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="!#">Developers</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
