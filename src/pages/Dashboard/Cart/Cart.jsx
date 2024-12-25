import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const [cart, refetch] = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = cart.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(cart.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDeleteCartItem = (cartId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${cartId}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <SectionTitle heading={"My Cart ITEMS"} subheading={"---Hurry Up!---"} />

      {/* Header Content */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-lg md:text-2xl font-semibold mb-2 md:mb-0 text-[#787663]"
        >
          Items: <span className="text-[#c38920]">{cart.length}</span>
        </motion.p>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-lg md:text-2xl font-semibold mb-2 md:mb-0 text-[#787663]"
        >
          Total Price: <span className="text-[#c38920]">${cart.reduce((total, item) => total + item.price, 0)}</span>
        </motion.p>
        <Link to="/dashboard/payment">
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className={`btn btn-sm btn-outline bg-transparent border-2 border-[#c38920] text-lg md:text-xl font-semibold text-[#c38920] hover:border-[#787663] hover:bg-transparent hover:text-[#787663] ${
              cart.length > 0 ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={cart.length === 0}
          >
            Pay
          </motion.button>
        </Link>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="table w-full border border-[#787663] rounded-lg">
          {/* head */}
          <thead>
            <motion.tr
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="bg-[#787663] text-white"
            >
              <th className="p-2">#</th>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Action</th>
            </motion.tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item._id}>
                <motion.th
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="p-2 text-base text-white md:text-lg"
                >
                  <label>{indexOfFirstItem + index + 1}</label>
                </motion.th>
                <td className="p-2">
                  <div className="flex items-center justify-center">
                    <div className="avatar">
                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.4,
                          x: { type: "spring", stiffness: 60 },
                          opacity: { duration: 1 },
                          ease: "easeIn",
                          duration: 1,
                        }}
                        className="mask mask-squircle h-12 w-12"
                      >
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  </div>
                </td>
                <motion.td
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.6,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="p-2"
                >
                  <span className="text-base md:text-lg font-bold text-white">
                    {item.name}
                  </span>
                </motion.td>
                <motion.td
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.8,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="p-2"
                >
                  <span className="text-base md:text-lg font-semibold text-white">
                    ${item.price}
                  </span>
                </motion.td>
                <td className="p-2 text-center">
                  <motion.button
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 1,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 1 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    onClick={() => handleDeleteCartItem(item._id)}
                    className="btn btn-ghost p-1"
                  >
                    <FaTrashAlt className="text-xl md:text-4xl text-red-500 hover:text-red-700" />
                  </motion.button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="pagination flex gap-2 text-white">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "bg-blue-700 text-white" : ""
                }`}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  className="btn btn-ghost px-3 py-1 rounded"
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Cart;
