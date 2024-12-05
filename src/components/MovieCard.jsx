import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { _id, image, title, genre, duration, rating, year } = movie;

  return (
    <div className="shadow-[#38e8ff2e] shadow-xl">
      <img
        className="w-full max-h-[550px] object-cover mb-4"
        src={image}
        alt=""
      />
      <div className="px-7 pb-7 flex flex-col gap-2">
        <h1 className="font-medium text-xl pb-3">{title}</h1>
        <h1 className="font-medium text-base">
          Genre :
          <span className="badge bg-cyan-700 text-white p-3 ml-3">{genre}</span>
        </h1>
        <h1 className="font-medium text-base">
          Duration :
          <span className="badge bg-cyan-700 text-white p-3 ml-3">
            {duration} minues
          </span>
        </h1>
        <h1 className="font-medium text-base">
          Release Year :
          <span className="badge bg-cyan-700 text-white p-3 ml-3">{year} </span>
        </h1>
        <h1 className="font-medium text-base">
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
        <Link
          to={`moviedetails/${_id}`}
          className="btn mt-5 bg-cyan-700 hover:bg-cyan-800 text-white text-base"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
