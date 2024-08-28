import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(menu.length / itemsPerPage);

  // Get current items
  const currentItems = menu.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pages = [];
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="btn mx-1"
        >
          Previous
        </button>
      );
    }

    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`btn mx-1 ${currentPage === 1 ? "btn-active" : ""}`}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      pages.push(<span key="dots1">...</span>);
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`btn mx-1 ${currentPage === i ? "btn-active" : ""}`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      pages.push(<span key="dots2">...</span>);
    }

    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`btn mx-1 ${
            currentPage === totalPages ? "btn-active" : ""
          }`}
        >
          {totalPages}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="btn mx-1"
        >
          Next
        </button>
      );
    }

    return pages;
  };

  return (
    <div>
      <SectionTitle
        heading="Manage Items"
        subheading="---Hurry Up---"
      ></SectionTitle>

      {/* Manage Item Table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <th>{(currentPage - 1) * itemsPerPage + index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="Menu Items Picture" />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{item.name} </td>
                  <td className="font-bold">${item.price} </td>
                  <th>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost">
                        <CiEdit className="text-3xl text-yellow-700 hover:text-blue-700" />
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost"
                    >
                      <FaTrashAlt className="text-3xl text-red-700 hover:text-blue-700" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            {renderPagination()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
