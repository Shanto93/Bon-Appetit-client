import { Link } from "react-router-dom";
import signUPImg from '../../../assets/others/authentication.gif';

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
        <h1 className="md:text-5xl font-bold mb-5 text-center">Signup now!</h1>
        <img src={signUPImg} alt="Authentication Image" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="LOGIN" />
            </div>
          </form>
          <div>
            <p className="text-center pb-7">
              Already signup? Please
              <Link to={"/login"}>
                {" "}
                <span className="text-blue-500">LOGIN</span>{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
