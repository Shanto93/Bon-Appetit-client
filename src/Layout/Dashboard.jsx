import { NavLink, Outlet } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import {
  FaCalendar,
  FaHome,
  FaUtensils,
  FaListUl,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { BiSolidFoodMenu } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: Get isAdmin data from database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-yellow-500">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome />
                  ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils />
                  ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaListUl />
                  MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <MdOutlineRateReview />
                  MANAGE BOOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers />
                  ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <HiShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reviews">
                  <MdOutlineRateReview />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <TbBrandBooking />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}

          {/* Divider Part */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <IoMdHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <BiSolidFoodMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <SlCalender />
              Order
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1 ml-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
