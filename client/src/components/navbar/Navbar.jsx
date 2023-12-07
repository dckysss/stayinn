import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo1 from "../../assets/logo1.png"
import Logout from "../../pages/login/Logout";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <div className="logo">
            <img src={logo1} width={120} alt="" />
          </div>
        </Link>
        {user ?
          <div>hi, {user.username} <Logout /></div>
          : (
            <div className="navItems">
              <Link to="/register" className="navLink">Register</Link>
              <Link to="/login" className="navLink">Login</Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default Navbar;
