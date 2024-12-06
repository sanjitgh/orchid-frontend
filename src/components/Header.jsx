import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provaider/AuthProvaider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { handelLogout, user } = useContext(AuthContext);
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-white border-b" : ""
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-white border-b" : ""
        }
        to={"/allmovies"}
      >
        All Movies
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-white border-b" : ""
        }
        to={"/addmovie"}
      >
        Add Movie
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-white border-b" : ""
        }
        to={"/myfevourite"}
      >
        My Fevourite
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-white border-b" : ""
        }
        to={"/blog"}
      >
        Blog
      </NavLink>

      {user ? (
        ""
      ) : (
        <div className="flex flex-col lg:flex-row gap-3">
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-white border-b" : ""
            }
            to={"/login"}
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-white border-b" : ""
            }
            to={"/register"}
          >
            Register
          </NavLink>
        </div>
      )}
    </>
  );
  return (
    <div className="navbar py-4 bg-cyan-700 text-white md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-cyan-700 rounded-box mt-3 w-52 p-4 shadow z-20 gap-3"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-3xl font-bold logo">
          Orchid
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 font-medium items-center">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="relative text-2xl cursor-pointer group">
            <img
              className="rounded-full w-10 h-10"
              src={user?.photoURL}
              alt="profile-photo"
            />

            <div className="absolute bg-cyan-700 px-5 py-3 top-[60px] -right-8 w-56 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <h2 className="text-lg font-medium mb-3">
                {user && user?.displayName}
              </h2>
              <button
                onClick={handelLogout}
                className="bg-red-600 text-base px-5 py-2 cursor-pointer rounded-sm"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-2xl cursor-pointer">
            <FaUser></FaUser>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
