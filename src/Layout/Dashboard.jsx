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
import { IoMdHome } from "react-icons/io";
import { BiSolidFoodMenu } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }} 
    className="flex flex-col md:flex-row ">
      {/* Sidebar */}
      <div className="w-full md:w-64 min-h-fit md:min-h-screen bg-[#262a48] md:fixed md:left-0 border-r-2 border-white">
        <ul className="menu p-4 text-center md:text-left">
          {isAdmin ? (
            <>
              <li className="text-[#fcfcfc]">
                <NavLink to="/dashboard/adminHome">
                  <FaHome />
                  ADMIN HOME
                </NavLink>
              </li>
              <li className="text-[#fcfcfc]">
                <NavLink to="/dashboard/addItems">
                  <FaUtensils />
                  ADD ITEMS
                </NavLink>
              </li>
              <li className="text-[#fcfcfc]">
                <NavLink to="/dashboard/manageItems">
                  <FaListUl />
                  MANAGE ITEMS
                </NavLink>
              </li>
              <li className="text-[#fcfcfc]">
                <NavLink to="/dashboard/allUsers">
                  <FaUsers />
                  ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-[#fcfcfc]">
                <NavLink to="/dashboard/userHome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li className="text-[#fcfcfc]">
                <NavLink to="/dashboard/paymentHistory">
                  <FaCalendar />
                  Payment History
                </NavLink>
              </li>
              <li className="text-[#fcfcfc]">
                <NavLink to="/dashboard/cart">
                  <HiShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li className="text-[#fcfcfc]">
                <NavLink to="/dashboard/reviews">
                  <MdOutlineRateReview />
                  Add Review
                </NavLink>
              </li>
            </>
          )}

          {/* Divider Part */}
          <div className="divider divider-warning"></div>
          <li className="text-[#fcfcfc]">
            <NavLink to="/">
              <IoMdHome />
              Home
            </NavLink>
          </li>
          <li className="text-[#fcfcfc]">
            <NavLink to="/menu">
              <BiSolidFoodMenu />
              Menu
            </NavLink>
          </li>
          <li className="text-[#fcfcfc]">
            <NavLink to="/order/salad">
              <SlCalender />
              Order
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-8 md:ml-64 p-4 bg-[#262a48]">
        <Outlet />
      </div>
    </motion.div>
  );
};

export default Dashboard;
