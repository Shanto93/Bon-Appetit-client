import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const AddReview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.rating = rating;
    console.log(data);
    const reviewItem = {
      name: user.displayName,
      details: data.details,
      rating: data.rating,
      category: data.category,
      suggestion: data.suggestion,
      email: user.email,
    };

    const res = await axiosSecure.post("/reviews", reviewItem);
    console.log(res.data);
    if (res.data.insertedId) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.displayName}'s review has been added successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <SectionTitle
        heading="GIVE A REVIEW..."
        subheading="---Sharing is Caring!!!---"
      ></SectionTitle>

      <div>
        <div>
          <div className="hero bg-[#262a48] min-h-full">
            <div className="hero-content w-full">
              <div className="card w-full bg-[#262a48] shrink-0">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card-body w-full"
                >
                  {/* Rating */}
                  <div className="flex justify-center items-center">
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
                      className="form-control"
                    >
                      <label className="label">
                        <span className="label-text text-[#787663] text-center w-full text-3xl">
                          Rate <span className="text-[#c38920]">Us!</span>
                        </span>
                      </label>

                      <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                      />
                    </motion.div>
                  </div>

                  {/* Category */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.4,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 1 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    className="form-control w-full"
                  >
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Which recipe you liked most?
                      </span>
                    </label>
                    <select
                      defaultValue="salad"
                      {...register("category", { required: true })}
                      className="select hover:select-warning w-full "
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
                  {errors.category && (
                    <span className="text-red-600">This field is required</span>
                  )}

                  {/* Suggestion */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
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
                      <span className="label-text text-white font-semibold">
                        Do you have any suggestion for us?
                      </span>
                    </label>
                    <input
                      {...register("suggestion", { required: true })}
                      type="text"
                      placeholder="Recipe name"
                      className="input hover:input-warning input-bordered"
                    />
                    {errors.suggestion && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </motion.div>

                  {/* Details */}

                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 1 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                  >
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Kindly express your care in a short way.
                      </span>
                    </label>
                    <textarea
                      {...register("details", { required: true })}
                      className="textarea hover:textarea-warning w-full columns-lg"
                      placeholder="Recipe Details"
                    ></textarea>
                    {errors.details && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </motion.div>

                  {/* Button area */}
                  <motion.button
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 1,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 1 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    className="btn bg-[#c38920] border-0 mt-3 text-white font-semibold hover:btn-warning"
                  >
                    Send Review
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
