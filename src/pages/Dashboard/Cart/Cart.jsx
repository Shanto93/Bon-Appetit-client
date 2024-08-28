import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Calculate the indices of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the items to display on the current page
  const currentItems = cart.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
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
      <SectionTitle
        heading={"My Cart ITEMS"}
        subheading={"---Hurry Up!---"}
      />

      {/* Header Content */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <p className="text-lg md:text-2xl font-semibold mb-2 md:mb-0">
          Items: {cart.length}
        </p>
        <p className="text-lg md:text-2xl font-semibold mb-2 md:mb-0">
          Total Price: ${cart.reduce((total, item) => total + item.price, 0)}
        </p>
        <Link to="/dashboard/payment">
          <button
            className={`btn btn-ghost text-lg md:text-xl font-semibold bg-blue-700 text-white ${
              cart.length > 0 ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={cart.length === 0}
          >
            Pay
          </button>
        </Link>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200 rounded-lg">
          {/* head */}
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">#</th>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item._id}>
                <th className="p-2">
                  <label>{indexOfFirstItem + index + 1}</label>
                </th>
                <td className="p-2">
                  <div className="flex items-center justify-center">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <span className="font-bold">{item.name}</span>
                </td>
                <td className="p-2">
                  <span className="font-semibold">${item.price}</span>
                </td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleDeleteCartItem(item._id)}
                    className="btn btn-ghost p-1"
                  >
                    <FaTrashAlt className="text-xl text-red-700 hover:text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="pagination flex gap-2">
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
