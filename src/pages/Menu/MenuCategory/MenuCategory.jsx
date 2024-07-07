import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({items}) => {
  return (
    <div>
      <div className="mb-10 grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item.key} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
