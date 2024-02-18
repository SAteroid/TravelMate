import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo"> <h2>TravelMate</h2></span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton"><Link to='/login'>Register</Link></button>
            <button className="navButton"><Link to='/login'>Login</Link></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
