// import Swal from "sweetalert2";
// import useAuth from "../hooks/useAuth";
// import { useLocation, useNavigate } from "react-router-dom";
// import { axiosSecure } from "../hooks/useAxiosSecure";
// import useCart from "../hooks/useCart";

// const FoodCart = ({ item }) => {
//   const { image, price, name, recipe, _id } = item;
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [, refetch] = useCart();

//   const handleAddToCart = () => {
//     if (user && user.email) {
//       const sentItem = {
//         food_id: _id,
//         email: user.email,
//         image,
//         price,
//         name,
//         recipe,
//       };

//       axiosSecure.post("/carts", sentItem).then((res) => {
//         if (res.data.insertedId) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${name} added to your cart.`,
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//         refetch();
//       });
//     } else {
//       Swal.fire({
//         title: "You are not logged in.",
//         text: "Please Login First.",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Go to Login",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           navigate("/login", { state: { from: location } });
//         }
//       });
//     }
//   };

//   return (
//     <div className="card bg-base-100 w-full sm:w-64 md:w-72 shadow-xl mx-auto">
//       <figure className="relative">
//         <img src={image} alt="Menu Items Photo" className="rounded-md w-full h-36 sm:h-40 md:h-48 object-cover" />
//         <p className="absolute top-2 right-2 px-2 py-1 bg-slate-400 text-white rounded-md font-semibold hover:text-orange-500 hover:bg-transparent">
//           {price}
//         </p>
//       </figure>
//       <div className="card-body items-center text-center">
//         <h2 className="card-title text-lg md:text-xl">{name}</h2>
//         <p className="text-sm md:text-base">{recipe}</p>
//         <div className="card-actions">
//           <button
//             onClick={() => handleAddToCart(item)}
//             className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 hover:text-orange-500 hover:border-orange-500"
//           >
//             ADD TO CART
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodCart;

import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosSecure } from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import { motion } from "framer-motion"; // Import Framer Motion

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
      className="card bg-base-100 w-full sm:w-64 md:w-72 shadow-xl mx-auto transition-transform duration-100 hover:scale-105" // Add transition and hover scale
      whileHover={{ scale: 1.10 }} // Optional, for additional zoom effect with Framer Motion
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
          className="rounded-md w-full h-36 sm:h-40 md:h-48 object-cover"
        />
        <p className="absolute top-2 right-2 px-2 py-1 bg-slate-400 text-white rounded-md font-semibold hover:text-orange-500 hover:bg-transparent">
          ${price}
        </p>
      </figure>
      <div className="card-body items-center text-center">
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
          className="card-title text-lg md:text-xl"
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
          className="text-sm md:text-base"
        >
          {recipe}
        </motion.p>
        <div className="card-actions">
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
            className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 hover:text-orange-500 hover:border-orange-500"
          >
            ADD TO CART
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCart;
