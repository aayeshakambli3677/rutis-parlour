import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <nav>
      <h2>Ruti's Parlour</h2>

      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/history">History</Link>
      <Link to='/login'>Login</Link>

<Link to="/customer-dashboard">
  Customer Dashboard
</Link>

<Link to="/profile">
  Beauty Profile
</Link>

<Link to="/service-history">
  Service History
</Link>
      <button onClick={logout}>
      Logout
    </button>

    </nav>
  );
};

export default Navbar;