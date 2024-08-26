import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaFirstOrder, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: stats,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </>
    );
  }

  if (error || !stats) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold my-3">Hi, Welcome {user.displayName ? user.displayName : "back"}!</h1>

        {/* Stats DIV */}
        <div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-3xl text-orange-500">
                <FaDollarSign></FaDollarSign>
              </div>
              <div className="stat-value">{stats.revenue} </div>
              <div className="stat-title">Revenue</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-3xl text-orange-500">
                <FaUsers></FaUsers>
              </div>
              <div className="stat-value">{stats.customers} </div>
              <div className="stat-title">Customers</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-3xl text-orange-500">
                <FaBook></FaBook>
              </div>
              <div className="stat-value">{stats.products} </div>
              <div className="stat-title">Products</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-3xl text-orange-500">
                <FaFirstOrder></FaFirstOrder>
              </div>
              <div className="stat-value">{stats.orders} </div>
              <div className="stat-title">Orders</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
