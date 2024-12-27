import { motion } from "framer-motion";

const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div
      className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-5 p-4 shadow-xl shadow-[0 0 5px #2f3665]"
      style={{ backgroundColor: "#2f3665", borderRadius: "10px" }}
    >
      {/* Animated Image */}
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
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px] md:w-[100px] lg:w-[120px] h-[90px] mx-auto md:mx-0"
        src={image}
        alt="Popular Menu Image"
      />
      {/* Content Section */}
      <div className="flex-1 text-center md:text-left">
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
          className="uppercase font-bold text-lg md:text-xl lg:text-xl"
          style={{ color: "#c38920" }}
        >
          {name}
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
          className="mt-2 text-xs md:text-sm lg:text-sm"
          style={{ color: "#787663" }}
        >
          {recipe}
        </motion.p>
      </div>
      {/* Price Section */}
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-center md:text-left text-sm md:text-lg lg:text-lg font-semibold"
        style={{ color: "#c38920" }}
      >
        ${price}
      </motion.p>
    </div>
  );
};

export default MenuItem;
