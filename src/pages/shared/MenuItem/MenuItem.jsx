// import { motion } from "framer-motion";

// const MenuItem = ({ item }) => {
//   const { image, price, name, recipe } = item;
//   return (
//     <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-5">
//       <motion.img
//         initial={{ x: -100, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{
//           delay: 0.2,
//           x: { type: "spring", stiffness: 60 },
//           opacity: { duration: 1 },
//           ease: "easeIn",
//           duration: 1,
//         }}
//         style={{ borderRadius: "0 200px 200px 200px" }}
//         className="w-[100px] md:w-[120px] lg:w-[150px] mx-auto md:mx-0"
//         src={image}
//         alt="Popular Menu Image"
//       />
//       <div className="flex-1 text-center md:text-left">
//         <motion.h3
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{
//             delay: 0.4,
//             x: { type: "spring", stiffness: 60 },
//             opacity: { duration: 1 },
//             ease: "easeIn",
//             duration: 1,
//           }}
//           className="text-[] uppercase font-bold text-lg md:text-xl lg:text-2xl"
//         >
//           {name}
//           <span className="hidden md:inline"></span>
//         </motion.h3>
//         <motion.p
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{
//             delay: 0.6,
//             x: { type: "spring", stiffness: 60 },
//             opacity: { duration: 1 },
//             ease: "easeIn",
//             duration: 1,
//           }}
//           className="text-[#2F4F4F] mt-2 text-sm   md:text-base lg:text-lg"
//         >
//           {recipe}
//         </motion.p>
//       </div>
//       <motion.p
//         initial={{ y: -100, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{
//           delay: 0.2,
//           x: { type: "spring", stiffness: 60 },
//           opacity: { duration: 1 },
//           ease: "easeIn",
//           duration: 1,
//         }}
//         className="text-yellow-500 text-center md:text-left text-sm md:text-lg lg:text-xl font-bold"
//       >
//         ${price}
//       </motion.p>
//     </div>
//   );
// };

// export default MenuItem;

import { motion } from "framer-motion";

const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-5">
      {/* Image */}
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
        className="w-[100px] md:w-[120px] lg:w-[150px] mx-auto md:mx-0"
        src={image}
        alt="Popular Menu Image"
      />

      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        {/* Title */}
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
          className="text-[#800000] uppercase font-bold text-lg md:text-xl lg:text-2xl"
        >
          {name}
        </motion.h3>

        {/* Recipe Description */}
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
          className="text-[#2F4F4F] mt-2 text-sm md:text-base lg:text-lg"
        >
          {recipe}
        </motion.p>
      </div>

      {/* Price */}
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-[#FFD700] text-center md:text-left text-sm md:text-lg lg:text-xl font-bold"
      >
        ${price}
      </motion.p>
    </div>
  );
};

export default MenuItem;
