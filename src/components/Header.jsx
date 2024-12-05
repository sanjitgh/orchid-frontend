import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
        <ul className="menu menu-horizontal px-1 gap-5 font-medium">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">User</a>
      </div>
    </div>
  );
};

export default Header;
