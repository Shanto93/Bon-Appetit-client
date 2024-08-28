import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserHome = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const axiosSecure = useAxiosSecure();

  const { data: userData = [] } = useQuery({
    queryKey: ["userData", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/userStats/${user.email}`);
      return res.data;
    },
  });

  console.log(userData.payments);

  return (
    <div>
      {/* Other Stats */}
      <div className="w-full my-10 px-4">
        <div className="flex flex-col md:flex-row stats shadow w-full max-w-4xl mx-auto gap-4">
          <div className="stat place-items-center p-4 bg-white rounded-lg shadow-md">
            <div className="stat-title text-center text-lg md:text-xl font-semibold">
              Total Orders
            </div>
            <div className="stat-value text-center text-2xl md:text-3xl font-bold">
              {userData.ordersCount}
            </div>
          </div>

          <div className="stat place-items-center p-4 bg-white rounded-lg shadow-md">
            <div className="stat-title text-center text-lg md:text-xl font-semibold">
              Total Spent
            </div>
            <div className="stat-value text-center text-2xl md:text-3xl font-bold text-secondary">
              {userData.totalSpent}$
            </div>
          </div>

          <div className="stat place-items-center p-4 bg-white rounded-lg shadow-md">
            <div className="stat-title text-center text-lg md:text-xl font-semibold">
              Reviews
            </div>
            <div className="stat-value text-center text-2xl md:text-3xl font-bold">
              {userData.totalReviews}
            </div>
          </div>
        </div>
      </div>

      {/* user profile */}
      <div>
        <div className="md:w-96 h-72 bg-red-600 bg-opacity-10 border-b-4  border-b-red-600 shadow-xl flex flex-col items-center justify-center mx-auto">
          <div className="flex justify-center">
            {user ? (
              <img
                className="h-28 w-28 rounded-full"
                src={user.photoURL}
                alt=""
              />
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center mt-3 text-3xl font-bold">
            {user ? user.displayName : ""}
          </div>
          <div className="flex justify-center mt-3">
            {user ? <h2>Email: {user.email}</h2> : ""}
          </div>
          {isAdmin ? (
            <div className="mt-3">
              <h2>Role: Admin</h2>
            </div>
          ) : (
            <div className="mt-3">
              <h2>Role: User</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
