import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter(item => item.category ==="popular")

  return (
    <section>
      <SectionTitle
        subheading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="mb-10 grid md:grid-cols-2 gap-10">
        {popularMenu.map((item) => (
          <MenuItem key={item.key} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
