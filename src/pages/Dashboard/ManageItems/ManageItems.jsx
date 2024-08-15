import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu] = useMenu();
  return (
    <div>
      <SectionTitle
        heading="Manage Iteams"
        subheading="---Hurry Up---"
      ></SectionTitle>

      {/* Manage Iteam Table */}
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
              {menu.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
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
                    <button className="btn btn-ghost">
                      <CiEdit className="text-3xl text-yellow-700 hover:text-blue-700" />
                    </button>
                  </th>
                  <th>
                    <button className="btn btn-ghost">
                      <FaTrashAlt className="text-3xl text-red-700 hover:text-blue-700" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
