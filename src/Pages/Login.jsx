import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provaider/AuthProvaider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const { handelLogin, handelGoogleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    handelLogin(email, password)
      .then((res) => {
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Invalid User!");
      });
  };

  //  google login
  const handelLoginWithGoogle = () => {
    handelGoogleLogin().then((res) => {
      const name = res.user.displayName;
      const image = res.user.photoURL;
      const email = res.user.email;

      const newUser = {
        name,
        image,
        email,
      };

      // save user info to the database
      fetch("https://orchid-backend-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
        });

      if (location.state) {
        navigate(location.state);
      } else {
        navigate("/");
      }
    });
  };

  return (
    <div className="bg-cyan-50 dark:bg-slate-800 py-20 min-h-[95vh] flex justify-center items-center">
      <div className="container mx-auto px-3">
        <div className="card bg-cyan-700 dark:bg-slate-700 md:p-10 p-5 max-w-[650px] mx-auto">
          <h1 className="text-center text-white font-semibold text-2xl md:text-5xl mb-8">
            Login Form
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="px-3 text-white">
            <div className="form-control">
              <label className="label">
                <span className="text-white">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                autoComplete="off"
                placeholder="email"
                className="input input-bordered bg-transparent placeholder:text-gray-300 text-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password length must be 6 character",
                  },
                })}
                type="password"
                autoComplete="off"
                placeholder="password"
                className="input input-bordered bg-transparent placeholder:text-gray-300 text-white"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 mb-2 mt-3">
                {errors.password.message}
              </p>
            )}
            <label className="label">
              <a href="#" className="text-white">
                Forgot password?
              </a>
            </label>
            <div className="mt-4">
              <p>
                Are you new here?{" "}
                <Link to={"/register"}>
                  {" "}
                  <b>Register</b>{" "}
                </Link>
              </p>
            </div>
            <div className="my-3">
              {/* <h3 className="text-lg font-medium mb-3">Socail Link</h3> */}
              <Link
                onClick={handelLoginWithGoogle}
                className="text-base flex items-center gap-3"
              >
                Login With Google <FaGoogle className="text-2xl text-red-400" />
              </Link>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-transparent border-white hover:bg-transparent hover:dark:border-slate-400 text-white text-base font-medium">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
