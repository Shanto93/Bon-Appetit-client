import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/featured.jpg";
import { motion } from "framer-motion";
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
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={img1}
            alt=""
          />
        </div>
        <div className="text-center md:text-left">
          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-lg md:text-xl hover:text-orange-400"
          >
            June 04, 2024
          </motion.h3>
          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-lg md:text-xl hover:text-orange-400 mt-2"
          >
            WHERE CAN I GET SOME?
          </motion.h3>
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
            className="mt-4 text-sm md:text-base lg:text-lg hover:text-orange-400"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </motion.p>
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
            className="btn btn-outline mt-4 border-0 border-b-4 rounded-lg hover:border-orange-500"
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
