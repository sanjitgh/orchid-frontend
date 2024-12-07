import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { _id, image, title, genre, duration, rating, year } = movie;
  
  return (
    <div className="shadow-[#38e8ff2e] dark:shadow-slate-700 shadow-xl">
      <img
        className="w-full max-h-[550px] object-cover mb-4"
        src={image}
        alt=""
      />
      <div className="px-7 pb-7 flex flex-col gap-2">
        <h1 className="font-medium text-xl pb-3 dark:text-slate-200">{title}</h1>
        <h1 className="font-medium text-base dark:text-slate-200">
          Genre :
          <span className="badge bg-cyan-700 dark:bg-slate-600 text-white p-3 ml-3">{genre}</span>
        </h1>
        <h1 className="font-medium text-base dark:text-slate-200">
          Duration :
          <span className="badge bg-cyan-700 dark:bg-slate-600 text-white p-3 ml-3">
            {duration} minues
          </span>
        </h1>
        <h1 className="font-medium text-base dark:text-slate-200">
          Release Year :
          <span className="badge bg-cyan-700 dark:bg-slate-600 text-white p-3 ml-3">{year} </span>
        </h1>
        <h1 className="font-medium text-base dark:text-slate-200">
          Rating :
          <span className="relative left-1 top-1">
            <Rating
              className="text-xl text-cyan-700 dark:text-slate-600"
              initialRating={rating}
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
              readonly
            />
          </span>
        </h1>
        <Link
          to={`moviedetails/${_id}`}
          className="btn mt-5 bg-cyan-700 dark:bg-slate-600 hover:dark:bg-slate-700 dark:border-transparent hover:dark:border-transparent hover:bg-cyan-800 text-white text-base"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
