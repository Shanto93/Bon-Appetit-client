import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Image_Hosting_Key = import.meta.env.VITE_image_hosting_api;
const Image_Hosting_API = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Key}`;

const UpdateMenuItem = () => {
  const { _id, name, recipe, price, category } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
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
      const imgres = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(imgres.data);
      if (imgres.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="md:px-6 lg:px-8">
      <SectionTitle heading="Update Item" subheading="---Refresh info---" />

      {/* Form Part */}
      <div className="hero bg-[#262a48] min-h-full">
        <div className="hero-content w-full">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
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
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
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
                  defaultValue={name}
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Recipe name"
                  className="input hover:input-warning input-bordered"
                />
              </motion.div>

              {/* double field part */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
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
                    defaultValue={category}
                    {...register("category", { required: true })}
                    className="select hover:select-warning w-full"
                  >
                    <option disabled value="salad">
                      Select a category
                    </option>
                    <option>salad</option>
                    <option>pizza</option>
                    <option>soups</option>
                    <option>desserts</option>
                    <option>drinks</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
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
                    defaultValue={price}
                    {...register("price", { required: true })}
                    type="number"
                    placeholder="Price"
                    className="input hover:input-warning input-bordered"
                  />
                </motion.div>
              </div>

              {/* Textarea field */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <label className="label">
                  <span className="label-text text-[#fcfcfc] font-semibold">Recipe Details*</span>
                </label>
                <textarea
                  defaultValue={recipe}
                  {...register("recipe", { required: true })}
                  className="textarea hover:textarea-warning w-full"
                  placeholder="Recipe Details"
                ></textarea>
              </motion.div>

              {/* choose file field */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full sm:w-auto hover:input-warning mt-3"
                />
              </motion.div>

              {/* Button area */}
              <motion.button
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="btn bg-[#c38920] w-full border-0 mt-3 text-white font-semibold hover:bg-[#787663]"
              >
                Update Menu Items <FaUtensils className="ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMenuItem;
