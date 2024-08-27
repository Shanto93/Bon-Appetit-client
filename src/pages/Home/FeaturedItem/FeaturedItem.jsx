import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/featured.jpg";
import "./FeaturedItem.css";

const FeaturedItem = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subheading={"---Check it out---"}
        heading={"Featured Item"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center py-12 px-6 md:px-12 lg:px-36 bg-slate-500 bg-opacity-30">
      <div className="md:mr-16">
          <img src={img1} alt="" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-xl hover:text-orange-400">June 04, 2024</h3>
          <h3 className="text-lg md:text-xl hover:text-orange-400 mt-2">
            WHERE CAN I GET SOME?
          </h3>
          <p className="mt-4 text-sm md:text-base lg:text-lg hover:text-orange-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline mt-4 border-0 border-b-4 rounded-lg hover:border-orange-500">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
