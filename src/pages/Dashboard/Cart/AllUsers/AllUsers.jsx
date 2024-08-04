import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="MANAGE ALL USERS"
        subheading="---How many??---"
      ></SectionTitle>

      <h2 className="text-2xl font-semibold">TOTAL USERS: {users.length} </h2>
    </div>
  );
};

export default AllUsers;
