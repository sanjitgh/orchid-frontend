import React, { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provaider/AuthProvaider";

const FavoriteMovieCard = ({ data }) => {
  const { _id, image, title, genre, duration, rating, year } = data;
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)


  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you click confirm your item delete permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0E7490",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Confirem",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://orchid-backend-server.vercel.app/favoritemovie/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The movie has been deleted successfully.",
                icon: "success",
              });
              navigate(`/myfavorite/${user?.email}`);
            }
          });
      }
    });
  };

  return (
    <div className="shadow-[#38e8ff2e] shadow-xl">
      <img
        className="w-full max-h-[550px] object-cover mb-4"
        src={image}
        alt=""
      />
      <div className="px-7 pb-7 flex flex-col gap-2">
        <h1 className="font-medium dark:text-slate-200 text-xl pb-3">{title}</h1>
        <h1 className="font-medium text-base dark:text-slate-200 ">
          Genre :
          <span className="badge dark:bg-gray-600  bg-cyan-700 text-white p-3 ml-3">{genre}</span>
        </h1>
        <h1 className="font-medium text-base dark:text-slate-200 ">
          Duration :
          <span className="badge dark:bg-gray-600  bg-cyan-700 text-white p-3 ml-3">
            {duration} minues
          </span>
        </h1>
        <h1 className="font-medium text-base dark:text-slate-200 ">
          Release Year :
          <span className="badge dark:bg-gray-600  bg-cyan-700 text-white p-3 ml-3">{year} </span>
        </h1>
        <h1 className="font-medium text-base dark:text-slate-200 ">
          Rating :
          <span className="relative left-1 top-1">
            <Rating
              className="text-xl text-cyan-700"
              initialRating={rating}
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
              readonly
            />
          </span>
        </h1>
        <button
          onClick={() => handelDelete(_id)}
          className="btn mt-5 dark:bg-gray-600  bg-red-700 hover:bg-red-800 text-white text-base"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FavoriteMovieCard;
