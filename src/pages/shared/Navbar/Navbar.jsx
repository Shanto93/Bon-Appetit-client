// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { TiShoppingCart } from "react-icons/ti";
// import useCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const [cart] = useCart();
//   const [isAdmin] = useAdmin();

//   const handleLogOut = () => {
//     logout()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };

//   const navOptions = (
//     <>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive
//               ? "btn bg-transparent border-0 text-orange-600"
//               : "btn btn-ghost"
//           }
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="menu"
//           className={({ isActive }) =>
//             isActive
//               ? "btn bg-transparent border-0 text-[#FFD700]"
//               : "btn btn-ghost"
//           }
//         >
//           OUR MENU
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="order/salad"
//           className={({ isActive }) =>
//             isActive
//               ? "btn bg-transparent border-0 text-orange-600"
//               : "btn btn-ghost"
//           }
//         >
//           OUR SHOP
//         </NavLink>
//       </li>

//       <li>
//         <Link to="/dashboard/cart">
//           <button className="btn bg-transparent border-0 btn-sm">
//             <TiShoppingCart className="text-xl text-white" />
//             <div className="badge badge-secondary">+{cart.length}</div>
//           </button>
//         </Link>
//       </li>

//       <li>
//         {user ? (
//           // <button onClick={handleLogOut} className="btn btn-ghost">
//           //   LOGOUT
//           // </button>
//           ""
//         ) : (
//           <Link to={"login"}>
//             <button className="btn btn-sm btn-ghost">LOGIN</button>
//           </Link>
//         )}
//       </li>
//     </>
//   );
//   return (
//     <div>
//       <div className="navbar fixed z-10 bg-opacity-30 text-white bg-[#800000] max-w-screen-lg">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               {navOptions}
//             </ul>
//           </div>
//           <Link to={"/"} className="btn btn-ghost text-xl">
//             Bon Appetit
//           </Link>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navOptions}</ul>
//         </div>
//         <div className="navbar-end">
//           {user ? (
//             <div className="dropdown dropdown-hover dropdown-end">
//               <label
//                 tabIndex={0}
//                 className="btn m-1 bg-transparent border-0 hover:bg-transparent"
//               >
//                 <img
//                   className="w-14 h-14 ml-3 rounded-full mt-0 "
//                   src={user.photoURL}
//                   alt=""
//                 />
//               </label>
//               <ul
//                 tabIndex={0}
//                 className="dropdown-content z-[1] menu p-2 shadow bg-black bg-opacity-50 rounded-box w-52"
//               >
//                 <li>
//                   <div className="flex justify-center items-center w-28 h-28 mx-auto hover:bg-transparent">
//                     <img
//                       className="w-20 h-20 rounded-full"
//                       src={user.photoURL}
//                       alt=""
//                     />
//                   </div>
//                   <div className="flex justify-center items-center">
//                     {isAdmin ? (
//                       <Link to="/dashboard/adminHome">
//                         <button className="btn btn-sm bg-transparent border-0 text-xl text-center font-bold text-white hover:bg-transparent hover:text-orange-500">
//                           {user.displayName}
//                         </button>
//                       </Link>
//                     ) : (
//                       <Link to="/dashboard/userHome">
//                         <button className="btn btn-sm bg-transparent border-0 text-xl text-center font-bold text-white hover:bg-transparent hover:text-orange-500">
//                           {user.displayName}
//                         </button>
//                       </Link>
//                     )}
//                   </div>
//                 </li>
//                 <li>
//                   <button
//                     onClick={handleLogOut}
//                     className="btn bg-transparent btn-sm mb-5 border-0 text-xl text-center font-bold text-white hover:bg-transparent hover:text-orange-500"
//                   >
//                     LogOut
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//         {/* <div className="navbar-end">
//           {user ? (
//             <button className="btn h-14 w-14 rounded-full"><img className="w-full h-full" src={user.photoURL} alt="" /> </button>
//           ) : (
//             <button className="bg-transparent"></button>
//           )}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn bg-transparent border-0 border-b-2 border-[#787663] rounded-none text-[#c38920]  hover:bg-transparent hover:border-none "
              : "btn bg-transparent border-0 text-[#fcfcfc] hover:text-[#c38920] hover:bg-transparent hover:border-none"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="menu"
          className={({ isActive }) =>
            isActive
              ? "btn bg-transparent border-0 border-b-2 border-[#787663] rounded-none text-[#c38920]  hover:bg-transparent hover:border-none "
              : "btn bg-transparent border-0 text-[#fcfcfc] hover:text-[#c38920] hover:bg-transparent hover:border-none"
          }
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="order/salad"
          className={({ isActive }) =>
            isActive
              ? "btn bg-transparent border-0 border-b-2 border-[#787663] rounded-none text-[#c38920]  hover:bg-transparent hover:border-none "
              : "btn bg-transparent border-0 text-[#fcfcfc] hover:text-[#c38920] hover:bg-transparent hover:border-none"
          }
        >
          OUR SHOP
        </NavLink>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn btn-sm bg-transparent border-0 text-[#fcfcfc] hover:text-[#c38920] hover:bg-transparent hover:border-none">
            <TiShoppingCart className="text-xl" />
            <div className="badge badge-secondary text-[#fcfcfc]">
              +{cart.length}
            </div>
          </button>
        </Link>
      </li>
      <li>
        {user ? (
          ""
        ) : (
          <Link to="login">
            <button className="btn bg-transparent border-0 text-[#fcfcfc] hover:text-[#c38920]">
              LOGIN
            </button>
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-[#262a48] bg-opacity-90 text-[#fcfcfc] max-w-screen-lg">
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
              className="menu menu-sm dropdown-content bg-[#2f3665] text-[#262a48] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl text-[#c38920]">
            Bon Appetit
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <label
                tabIndex={0}
                className="btn bg-transparent border-0 hover:bg-transparent"
              >
                <img
                  className="w-14 h-14 ml-3 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content bg-[#2f3665] text-[#fcfcfc] rounded-box z-[1] menu p-2 shadow w-52"
              >
                <li>
                  <div className="flex justify-center items-center w-28 h-28 mx-auto">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    {isAdmin ? (
                      <Link to="/dashboard/adminHome">
                        <button className="btn bg-transparent border-0 text-[#c38920]">
                          {user.displayName}
                        </button>
                      </Link>
                    ) : (
                      <Link to="/dashboard/userHome">
                        <button className="btn bg-transparent border-0 text-[#c38920]">
                          {user.displayName}
                        </button>
                      </Link>
                    )}
                  </div>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn bg-transparent border-0 text-[#c38920]"
                  >
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
