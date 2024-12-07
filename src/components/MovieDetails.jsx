import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { MdFavoriteBorder, MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../provaider/AuthProvaider";
import { GrDocumentUpdate } from "react-icons/gr";
import toast from "react-hot-toast";
import { getAuth } from "firebase/auth";

const MovieDetails = () => {
  const { _id, image, title, genre, duration, rating, year, summery } =
    useLoaderData();
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(false);

  const users = getAuth().currentUser;

  const currentUserEmail = user?.user?.email;

  const singleMovie = {
    image,
    title,
    genre,
    duration,
    rating,
    year,
    summery,
    currentUserEmail,
  };

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
        fetch(`http://localhost:5000/movies/${id}`, {
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
              navigate("/allmovies");
            }
          });
      }
    });
  };

  const handelFavorite = () => {
    fetch("http://localhost:5000/favoritemovie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singleMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Add to favorite list");
        } else {
          toast.error("Already added");
        }
      });
      ///
      setIsDisabled(true); 
  };

  return (
    <div className="py-14 bg-cyan-50">
      <div className="container mx-auto px-3">
        <div className="text-end mb-14">
          <Link
            className="border-b border-cyan-700 text-cyan-700 font-semibold"
            to={"/allmovies"}
          >
            SEE MOVIES
          </Link>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <h1 className="font-semibold text-3xl mb-5">{title}</h1>
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  <tr className="border-none">
                    <th className="pl-0 py-0 font-medium text-lg w-[150px]">
                      Duration :
                    </th>
                    <td className="text-base py-2">{duration} minutes</td>
                  </tr>
                  <tr className="border-none">
                    <th className="pl-0 py-0 font-medium text-lg w-[150px]">
                      Genre :
                    </th>
                    <td className="text-base py-2">{genre}</td>
                  </tr>
                  <tr className="border-none">
                    <th className="pl-0 py-0 font-medium text-lg w-[150px]">
                      Rating :
                    </th>
                    <td className="text-base py-2">{rating}</td>
                  </tr>
                  <tr className="border-none">
                    <th className="pl-0 py-0 font-medium text-lg w-[150px]">
                      Release Year :
                    </th>
                    <td className="text-base py-2">{year}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-gray-600">
              <span className="font-medium text-lg text-gray-800">
                Description : <br />
              </span>
              {summery}
            </p>
            <div className="flex items-center mt-8 gap-5">
              <div className="tooltip" data-tip="Add Favorite">
                <button
                  onClick={handelFavorite}
                  disabled={isDisabled}
                  className="btn bg-transparent hover:bg-transparent text-cyan-700 hover:border-cyan-800 border-cyan-700 text-2xl"
                >
                  <MdFavoriteBorder />
                </button>
              </div>
              <div className="tooltip" data-tip="Update">
                <Link
                  to={`/updatemovie/${_id}`}
                  className="btn bg-transparent hover:bg-transparent text-cyan-700 hover:border-cyan-800 border-cyan-700 text-2xl"
                >
                  <GrDocumentUpdate />
                </Link>
              </div>
              <div className="tooltip" data-tip="Delete">
                <button
                  onClick={() => handelDelete(_id)}
                  className="btn bg-red-500 hover:bg-red-600 text-white text-2xl"
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          </div>
          <div>
            <img className="w-full object-cover" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
