import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturedMovie = () => {
  const movies = useLoaderData();
  const sortedMovies = movies.sort((a, b) => b.rating - a.rating);
  return (
    <div className="bg-cyan-50 dark:bg-slate-800 py-20">
      <div className="container mx-auto px-3">
        <h1 className="font-bold text-2xl md:text-4xl text-cyan-700 border-b dark:text-gray-200 border-cyan-700 inline">
          Featured Movies
        </h1>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-14">
          {sortedMovies.slice(0, 6).map((movie) => (
            <div key={movie._id} className="shadow-[#38e8ff2e] shadow-xl">
              <img
                className="w-full max-h-[550px] object-cover mb-4"
                src={movie.image}
                alt=""
              />
              <div className="px-7 pb-7 flex flex-col gap-2">
                <h1 className="font-medium  text-xl pb-3 dark:text-slate-200">
                  {movie.title}
                </h1>
                <h1 className="font-medium dark:text-slate-200  text-base">
                  Genre :
                  <span className="badge dark:bg-slate-600 bg-cyan-700 text-white p-3 ml-3">
                    {movie.genre}
                  </span>
                </h1>
                <h1 className="font-medium dark:text-slate-200  text-base">
                  Duration :
                  <span className="badge dark:bg-slate-600 bg-cyan-700 text-white p-3 ml-3">
                    {movie.duration} minues
                  </span>
                </h1>
                <h1 className="font-medium dark:text-slate-200  text-base">
                  Release Year :
                  <span className="badge dark:bg-slate-600 bg-cyan-700 text-white p-3 ml-3">
                    {movie.year}{" "}
                  </span>
                </h1>
                <h1 className="font-medium dark:text-slate-200  text-base">
                  Rating :
                  <span className="relative left-1 top-1">
                    <Rating
                      className="text-xl text-cyan-700 dark:text-slate-600"
                      initialRating={movie.rating}
                      emptySymbol={<FaRegStar />}
                      fullSymbol={<FaStar />}
                      readonly
                    />
                  </span>
                </h1>
                <Link
                  to={`/allmovies/moviedetails/${movie._id}`}
                  className="btn mt-5 dark:bg-slate-600 bg-cyan-700 hover:bg-cyan-800 text-white text-base"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center col-span-3 mb-5 mt-10">
          <Link
            className="btn mt-5 border-none bg-transparent hover:bg-transparent text-cyan-700 text-base "
            to={"/allmovies"}
          >
            See All Movies <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
