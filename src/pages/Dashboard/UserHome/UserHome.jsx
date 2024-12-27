import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { motion } from "framer-motion";

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

  console.log(userData);

  return (
    <div className="min-h-screen">
      {/* Other Stats */}
      <div className="w-full my-10 px-4">
        <div className="flex flex-col md:flex-row stats bg-[#262a48] shadow w-full max-w-4xl mx-auto gap-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="stat place-items-center p-4 bg-[#2f3665] rounded-md "
          >
            <div className="stat-title text-[#787663] text-center text-lg md:text-xl font-semibold">
              Total Orders
            </div>
            <div className="stat-value text-[#c38920] text-center text-2xl md:text-3xl font-bold">
              {userData.ordersCount}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="stat place-items-center p-4 bg-[#2f3665] rounded-md"
          >
            <div className="stat-title text-center text-lg md:text-xl font-semibold text-[#787663]">
              Total Spent
            </div>
            <div className="stat-value text-center text-2xl text-[#c38920] md:text-3xl font-bold">
              {userData.totalSpent}$
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="stat place-items-center p-4 bg-[#2f3665] rounded-lg"
          >
            <div className="stat-title text-[#787663] text-center text-lg md:text-xl font-semibold">
              Reviews
            </div>
            <div className="stat-value text-[#c38920] text-center text-2xl md:text-3xl font-bold">
              {userData.totalReviews}
            </div>
          </motion.div>
        </div>
      </div>

      {/* user profile */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <div className="diff h-[350px] rounded-md w-2/3 mx-auto aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-[#2f3665] text-primary-content grid place-content-center text-9xl font-black">
              {/* image */}
              <div className="flex flex-col justify-center items-center gap-4 ">
                <div className="avatar">
                  <div className="ring-secondary ring-offset-base-100 w-36 rounded-full ring ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                {/* name */}
                <div className="badge badge-secondary badge-outline">
                  {user && user.displayName}
                </div>

                {/* email */}
                <div className="badge badge-secondary badge-outline">
                  {user && user.email}
                </div>

                {/* role */}
                <div className="badge badge-secondary badge-outline">
                  {isAdmin ? "Admin" : "User"}
                </div>
              </div>
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-[#787663]/90 grid place-content-center text-9xl font-black">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="avatar">
                  <div className="ring-info ring-offset-base-100 w-36 rounded-full ring ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                {/* name */}
                <div className="badge badge-info badge-outline">
                  {user && user.displayName}
                </div>

                {/* email */}
                <div className="badge badge-info badge-outline">
                  {user && user.email}
                </div>

                {/* role */}
                <div className="badge badge-info badge-outline">
                  {isAdmin ? "Admin" : "User"}
                </div>
              </div>
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserHome;
