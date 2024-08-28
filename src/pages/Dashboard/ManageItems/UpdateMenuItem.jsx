import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

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
      <div className="hero bg-base-200 min-h-full">
        <div className="hero-content w-full">
          <div className="card w-full bg-base-200 shadow-2xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recipe name*</span>
                </label>
                <input
                  defaultValue={name}
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Recipe name"
                  className="input hover:input-warning input-bordered"
                />
              </div>

              {/* double field part */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category*</span>
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
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price*</span>
                  </label>
                  <input
                    defaultValue={price}
                    {...register("price", { required: true })}
                    type="number"
                    placeholder="Price"
                    className="input hover:input-warning input-bordered"
                  />
                </div>
              </div>

              {/* Textarea field */}
              <div>
                <label className="label">
                  <span className="label-text">Recipe Details*</span>
                </label>
                <textarea
                  defaultValue={recipe}
                  {...register("recipe", { required: true })}
                  className="textarea hover:textarea-warning w-full"
                  placeholder="Recipe Details"
                ></textarea>
              </div>

              {/* choose file field */}
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full sm:w-auto hover:input-warning mt-3"
              />

              {/* Button area */}
              <button className="btn bg-yellow-600 w-full sm:w-1/3 mt-3 text-white font-semibold hover:btn-warning">
                Update Menu Items <FaUtensils className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMenuItem;
