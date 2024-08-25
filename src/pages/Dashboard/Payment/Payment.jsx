import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

// TODO: Add publishable key
const stripePromise = loadStripe(
  "pk_test_51PqUUZRvsgXyYSdSkEcpbeViC8dPAB1GAJMzJaATpbNuvv4dwt8cJrTHkTx6O02hK3z5SYh7vdGN1D3ZKXoN6KCt002CV56TaR"
);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subheading="---Please pay first to eat---"
      ></SectionTitle>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
