import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/featured.jpg";
import "./FeaturedItem.css";

const FeaturedItem = () => {
  return (
    // paralax-> Background Image Fixed
    <section className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subheading={"---Check it out---"}
        heading={"Featured Item"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center py-20 pt-12 px-36 bg-slate-500 bg-opacity-30">
        <div>
          <img src={img1} alt="" />
        </div>
        <div className="md:ml-16">
          <h3 className="text-xl hover:text-orange-400">June 04, 2024</h3>
          <h3 className="text-xl hover:text-orange-400">
            WHERE CAN I GET SOME?
          </h3>
          <p className="hover:text-orange-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline mt-2 border-0 border-b-4 rounded-lg hover:border-orange-500">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
