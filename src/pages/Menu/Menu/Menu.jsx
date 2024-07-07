import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
// Images
import Cover from "../../shared/Cover/Cover";
import mainCover from "../../../assets/menu/soup-bg.jpg";
import pizaaPhoto from "../../../assets/menu/pizza-bg.jpg";
import dessertPhoto from "../../../assets/menu/dessert-bg.jpeg";
import saladPhoto from "../../../assets/menu/salad-bg.jpg";
import soupPhoto from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      {/* for today's offered section */}
      <Cover
        img={mainCover}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish"}
      ></Cover>
      <SectionTitle
        subheading={"Don't Miss"}
        heading={"Today's offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* for dessert section */}
      <Cover
        img={dessertPhoto}
        title={"Dessert"}
        subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <MenuCategory items={dessert}></MenuCategory>

      {/* for pizza section */}
      <Cover
        img={pizaaPhoto}
        title={"Pizza"}
        subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <MenuCategory items={pizza}></MenuCategory>

      {/* for salads section */}
      <Cover
        img={saladPhoto}
        title={"Salad"}
        subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <MenuCategory items={salad}></MenuCategory>

      {/* for soup section */}
      <Cover
        img={soupPhoto}
        title={"Soup"}
        subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <MenuCategory items={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
