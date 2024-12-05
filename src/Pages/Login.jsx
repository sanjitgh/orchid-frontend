import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-cyan-50">
      <div className="container mx-auto px-3">
        <div className="flex justify-center items-center h-[90vh]">
          <div className="card bg-cyan-700 p-10">
            <h1 className="text-center text-white font-semibold text-2xl md:text-5xl mb-8">
              Login
            </h1>
            <form className=" md:w-[590px] px-3 text-white">
              <div className="form-control">
                <label className="label">
                  <span className="text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered bg-transparent placeholder:text-gray-300 text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered bg-transparent placeholder:text-gray-300 text-white"
                  required
                />
              </div>
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
              <div className="form-control mt-6">
                <button className="btn bg-transparent border-white hover:bg-transparent text-white text-base font-medium">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
