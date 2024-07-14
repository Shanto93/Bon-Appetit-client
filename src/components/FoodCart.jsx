import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosSecure } from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCart = ({ item }) => {
  const { image, price, name, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = (food) => {
    console.log(food);
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
        console.log(res.data);
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
    <div className="card bg-base-100 w-72 shadow-xl">
      <figure className="">
        <img src={image} alt="Menu Items Photo" className="rounded-md" />
      </figure>
      <p className="absolute top-2 right-2 px-2 py-1 bg-slate-400 text-white rounded-md font-semibold hover:text-orange-500 hover:bg-transparent">
        {price}{" "}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name} </h2>
        <p className="text-sm">{recipe} </p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 hover:text-orange-500 hover:border-orange-500"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
