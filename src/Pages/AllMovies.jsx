import React from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
  const movies = useLoaderData();
  return (
    <div className="pb-20 pt-10">
      <div className="container mx-auto px-3">
        <h3 className="md:text-4xl text-2xl mb-8 font-semibold">All Movies</h3>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
