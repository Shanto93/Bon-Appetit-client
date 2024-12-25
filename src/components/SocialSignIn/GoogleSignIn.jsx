import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const GoogleSignIn = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn().then((res) => {
        console.log(res.user);

      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        console.log(res.data.insertedId);
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged in",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    });
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className="md:w-80">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline rounded-2xl px-5 mb-3 border-white w-full border-2 text-white hover:bg-transparent hover:border-white"
        >
          <FcGoogle className="text-xl md:mr-8" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleSignIn;
