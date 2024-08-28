import { Link, useNavigate } from "react-router-dom";
import signUPImg from "../../../assets/others/authentication.gif";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Image_Hosting_Key = import.meta.env.VITE_image_hosting_api;
const Image_Hosting_API = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Key}`;

const SignUp = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    //Image upload to Imgbb and then get URL
    const FileList = { image: data.image[0] };
    const res = await axiosPublic.post(Image_Hosting_API, FileList, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUser(data.name, res.data.data.display_url)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            photoURL: res.data.data.display_url,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("User created successfully");
              reset();

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Signup</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div className="hero-content flex flex-col lg:flex-row lg:space-x-8 w-full lg:w-2/3 max-w-screen-lg">
          <div className="text-center lg:text-left flex-1 lg:mr-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              Signup now!
            </h1>
            <img src={signUPImg} alt="Authentication" className="w-full max-w-md mx-auto lg:mx-0" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm mx-auto lg:mx-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 text-sm">Name is required</span>
                )}
              </div>

              {/* Choose file field */}
              <div className="form-control mb-4">
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full max-w-sm hover:input-warning"
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">Email is required</span>
                )}
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 10,
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 text-sm">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600 text-sm">
                    Password must be at least 6 characters.
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600 text-sm">
                    Password must be less than 10 characters.
                  </span>
                )}
              </div>

              <div className="form-control mb-6">
                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="SIGNUP"
                />
              </div>
            </form>
            <div className="text-center pb-7">
              <p>
                Already signed up? Please
                <Link to={"/login"}>
                  <span className="text-blue-500"> LOGIN</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
