import { Link } from "react-router-dom";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title }) => {
  return (
    <div>
      <div className="mb-10 grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="md:flex justify-center items-center mb-6 md:mb-16">
          <button className="btn btn-outline border-[#c38920] text-[#fcfcfc] mt-2 border-0 border-b-4 rounded-lg hover:border-[#787663] hover:bg-transparent hover:text-[#c38920]">
            Order {title}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
