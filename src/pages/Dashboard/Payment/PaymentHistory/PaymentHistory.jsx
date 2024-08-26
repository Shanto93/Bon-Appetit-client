import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
        <SectionTitle
        heading="Payment History"
        subheading="---See your all transaction history here---"
        ></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((item,index)=> <tr key={index} className="bg-base-200">
              <th>{index+1}</th>
              <td>${item?.price}</td>
              <td>{item?.transactionId}</td>
              <td>{item?.status}</td>
            </tr>)}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
