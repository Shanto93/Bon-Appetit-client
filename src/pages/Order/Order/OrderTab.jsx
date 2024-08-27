import FoodCart from "../../../components/FoodCart";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 my-8">
      {items.map((item) => (
        <FoodCart key={item._id} item={item}></FoodCart>
      ))}
    </div>
  );
};

export default OrderTab;
