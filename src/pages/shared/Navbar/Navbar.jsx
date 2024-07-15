import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>HOME</Link>{" "}
      </li>
      <li>
        <Link to={"menu"}>OUR MENU</Link>{" "}
      </li>
      <li>
        <Link to={"secret"}>SECRET</Link>{" "}
      </li>
      <li>
        <Link to={"order/salad"}>OUR SHOP</Link>{" "}
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn bg-transparent border-0 btn-sm">
            <TiShoppingCart className="text-xl text-white" />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>{" "}
      </li>

      {user ? (
        <button onClick={handleLogOut} className="btn btn-ghost">
          LOGOUT
        </button>
      ) : (
        <Link to={"login"}>
          <button className="btn btn-ghost">LOGIN</button>
        </Link>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 text-white bg-base-100 max-w-screen-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            Bistro Boss
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button className="btn">{user.displayName}</button>
          ) : (
            <button className="bg-transparent"></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
