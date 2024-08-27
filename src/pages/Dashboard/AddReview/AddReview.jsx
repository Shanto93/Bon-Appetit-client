import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    data.rating = rating; // Manually add the rating to the form data
    console.log(data);
    const reviewItem = {
      name: user.displayName,
      details: data.details,
      rating: data.rating,
      category: data.category,
      suggestion: data.suggestion,
      email: user.email
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
          <div className="hero bg-base-200 min-h-full">
            <div className="hero-content w-full">
              <div className="card w-full bg-base-200 shrink-0 shadow-2xl">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card-body w-full"
                >
                  {/* Rating */}
                  <div className="flex justify-center items-center">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-center w-full text-3xl">
                          Rate Us!
                        </span>
                      </label>

                      <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                      />
                    </div>
                    
                  </div>

                  {/* Category */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">
                        Which recipe you liked most?
                      </span>
                    </label>
                    <select
                      defaultValue="salad"
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
                  {errors.category && <span className="text-red-600">This field is required</span>}

                  {/* Suggestion */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Do you have any suggestion for us?
                      </span>
                    </label>
                    <input
                      {...register("suggestion", { required: true })}
                      type="text"
                      placeholder="Recipe name"
                      className="input hover:input-warning input-bordered"
                    />
                    {errors.suggestion && <span className="text-red-600">This field is required</span>}
                  </div>

                  {/* Details */}

                  <div>
                    <label className="label">
                      <span className="label-text">
                        Kindly express your care in a short way.
                      </span>
                    </label>
                    <textarea
                      {...register("details", { required: true })}
                      className="textarea hover:textarea-warning w-full columns-lg"
                      placeholder="Recipe Details"
                    ></textarea>
                    {errors.details && <span className="text-red-600">This field is required</span>}
                  </div>

                  {/* Button area */}
                  <button className="btn bg-yellow-600 w-1/3 mt-3 text-white font-semibold hover:btn-warning">
                    Send Review
                  </button>
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
