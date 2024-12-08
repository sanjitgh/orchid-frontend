import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provaider/AuthProvaider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, manageProfile, user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return toast.error("You need at least 6 character.");
    }
    if (!/.*[a-z].*/.test(password)) {
      return toast.error("You need at least one lowercase letter.");
    }
    if (!/.*[A-Z].*/.test(password)) {
      return toast.error("You need at least one uppercase letter.");
    }
    if (!/.*\d.*/.test(password)) {
      return toast.error("You need at least one number letter.");
    }

    createUser(email, password)
      .then((res) => {
        manageProfile(name, image).then((res) => {
          setUser({
            ...user,
            displayName: name,
            photoURL: image,
            email: email,
          });
        });

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

        navigate("/");
      })

      .catch((error) => {
        // console.log(error.message);
      });
  };

  return (
    <div className="bg-cyan-50 dark:bg-slate-800 py-20 min-h-[95vh] flex justify-center items-center">
      <div className="container mx-auto px-3">
        <div className="card bg-cyan-700 dark:bg-slate-700 md:p-10 p-5 max-w-[650px] mx-auto">
          <h1 className="text-center text-white font-semibold text-2xl md:text-5xl mb-8">
            Register
          </h1>
          <form onSubmit={handelSignUp} className=" px-3 text-white">
            <div className="form-control">
              <label className="label">
                <span className="text-white">Name</span>
              </label>
              <input
                name="name"
                type="text"
                autoComplete="off"
                placeholder="name"
                className="input input-bordered bg-transparent placeholder:text-gray-300 text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Photo URL</span>
              </label>
              <input
                name="image"
                type="text"
                autoComplete="off"
                placeholder="your-image.com"
                className="input input-bordered bg-transparent placeholder:text-gray-300 text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Email</span>
              </label>
              <input
                name="email"
                type="email"
                autoComplete="off"
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
                name="password"
                type="password"
                autoComplete="off"
                placeholder="password"
                className="input input-bordered bg-transparent placeholder:text-gray-300 text-white"
                required
              />
            </div>

            <div className="mt-4">
              <p>
                Already have an account?{" "}
                <Link to={"/login"}>
                  <b>Login</b>{" "}
                </Link>
              </p>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-transparent border-white hover:bg-transparent hover:dark:border-slate-400 text-white text-base font-medium">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
