import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-cyan-700 text-white">
      <div className="container mx-auto px-3">
        <div className="footer text-white">
          <aside>
            <h1 className="logo font-bold md:text-5xl text-2xl">Orchid</h1>
            <p className="max-w-[350px] my-3">
              Stay connected with us and lets know more stories about new movies
              and More Explorer Us for get it
            </p>
            <ul className="flex items-center gap-5">
              <li>
                <a
                  className="text-xl hover:text-gray-300 transition-all"
                  href={"https://www.facebook.com/"}
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="text-xl hover:text-gray-300 transition-all"
                  href={"https://www.twitter.com/"}
                  target="_blank"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  className="text-xl hover:text-gray-300 transition-all"
                  href={"https://www.instagram.com/"}
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </aside>
          <nav>
            <h6 className="footer-title text-xl font-medium">Services</h6>
            <Link to={"/allmovies"} className="text-base font-normal hover:text-gray-200 transition-all">
              Movies
            </Link>
            <Link to={""} className="text-base font-normal hover:text-gray-200 transition-all">
              Newsletter
            </Link>
            <Link to={"/blog"} className="text-base font-normal hover:text-gray-200 transition-all">
              Blog
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title text-xl font-medium">Information</h6>
            <Link to={"/register"} className="text-base font-normal hover:text-gray-200 transition-all">
              Sign Up
            </Link>
            <Link to={"/login"} className="text-base font-normal hover:text-gray-200 transition-all">
              Login
            </Link>
            <Link to={""} className="text-base font-normal hover:text-gray-200 transition-all">
              About Us
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title text-xl font-medium">Security</h6>
            <Link to={""} className="text-base font-normal hover:text-gray-200 transition-all">
              Terms and Condition
            </Link>
            <Link to={""} className="text-base font-normal hover:text-gray-200 transition-all">
            Privacy Policy
            </Link>
            <Link to={""} className="text-base font-normal hover:text-gray-200 transition-all">
              Contact Us
            </Link>
          </nav>
        </div>
        <div>
          <p className="text-center font-medium mt-20">
            Orchid All rights reserved 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
