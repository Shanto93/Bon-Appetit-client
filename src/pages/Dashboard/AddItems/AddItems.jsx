import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Image_Hosting_Key = import.meta.env.VITE_image_hosting_api;
const Image_Hosting_API = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // Image upload to Imgbb and then get URL
    const FileList = { image: data.image[0] };
    const res = await axiosPublic.post(Image_Hosting_API, FileList, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        price: parseFloat(data.price),
        category: data.category,
        image: res.data.data.display_url,
      };
      const imgres = await axiosSecure.post("/menu", menuItem);
      console.log(imgres.data);
      if (imgres.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading="ADD AN ITEM"
        subheading="---What's new?---"
      ></SectionTitle>

      {/* form part */}
      <div className="hero bg-[#262a48] min-h-full">
        <div className="hero-content w-full flex-col">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="card w-full bg-[#262a48]"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full"
            >
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="form-control"
              >
                <label className="label">
                  <span className="label-text text-[#fcfcfc] font-semibold">Recipe name*</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Recipe name"
                  className="input hover:input-warning input-bordered w-full"
                />
              </motion.div>

              {/* double field part */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text text-[#fcfcfc] font-semibold">Category*</span>
                  </label>
                  <select
                    defaultValue="salad"
                    {...register("category", { required: true })}
                    className="select hover:select-warning w-full"
                  >
                    <option disabled value="salad">
                      Select a category
                    </option>
                    <option value="salad">salad</option>
                    <option value="pizza">pizza</option>
                    <option value="soup">soup</option>
                    <option value="dessert">dessert</option>
                    <option value="drinks">drinks</option>
                    <option value="offered">offered</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.6,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text text-[#fcfcfc] font-semibold">Price*</span>
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    placeholder="Price"
                    className="input hover:input-warning input-bordered w-full"
                  />
                </motion.div>
              </div>

              {/* Textarea field */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="form-control mt-4"
              >
                <label className="label">
                  <span className="label-text text-[#fcfcfc] font-semibold">Recipe Details*</span>
                </label>
                <textarea
                  {...register("recipe", { required: true })}
                  className="textarea hover:textarea-warning w-full"
                  placeholder="Recipe Details"
                ></textarea>
              </motion.div>

              {/* choose file field */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="form-control mt-4"
              >
                <label className="label">
                  <span className="label-text text-[#fcfcfc] font-semibold">Upload Image*</span>
                </label>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input hover:input-warning w-full"
                />
              </motion.div>

              {/* Button area */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="flex justify-center mt-6 w-full"
              >
                <button className="btn border-0 bg-[#c38920] w-full text-white font-semibold hover:text-[#fcfcfc] hover:bg-[#787663] flex justify-center items-center gap-2">
                  Add Items
                  <FaUtensils />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
