import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosSecure } from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import { motion } from "framer-motion"; 

const FoodCart = ({ item }) => {
  const { image, price, name, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const sentItem = {
        food_id: _id,
        email: user.email,
        image,
        price,
        name,
        recipe,
      };

      axiosSecure.post("/carts", sentItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      });
    } else {
      Swal.fire({
        title: "You are not logged in.",
        text: "Please Login First.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <motion.div
      className="card bg-[#2f3665] w-full sm:w-64 md:w-72 mx-auto transition-transform duration-100 hover:scale-105 shadow-[0_0_15px_#787663]"
      whileHover={{ scale: 1.05 }}
    >
      <figure className="relative">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          src={image}
          alt="Menu Items Photo"
          className="rounded-md w-full h-36 sm:h-40 md:h-56 object-cover"
        />
        <p className="absolute top-2 text-sm right-2 px-2 py-1 bg-[#787663]/70 text-[#fcfcfc] rounded-md font-semibold">
          ${price}
        </p>
      </figure>
      <div className="text-center">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" text-lg font-semibold md:text-xl text-[#787663] my-3 text-center"
        >
          {name}
        </motion.h2>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-sm font-light md:text-sm px-4 text-[#fcfcfc]/60"
        >
          {recipe.slice(0,50)}
        </motion.p>
        <div className="flex justify-center items-center my-4">
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            onClick={() => handleAddToCart(item)}
            className="btn btn-sm btn-outline bg-transparent border-0 border-b-2 border-[#c38920] text-[#fcfcfc] hover:border-[#787663] hover:bg-transparent hover:text-[#c38920]"
          >
            ADD TO CART
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCart;
