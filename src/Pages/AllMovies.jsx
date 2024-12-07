import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
  const movies = useLoaderData();
  const [movieData, setMovieData] = useState(movies);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/movies?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
      });
  }, [search]);

  return (
    <div className="pb-20 pt-10 bg-cyan-50">
      <div className="container mx-auto px-3">
        <div className="md:flex justify-between">
          <h3 className="md:text-4xl text-2xl mb-8 font-semibold">
            All Movies
          </h3>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="Secrch"
            className="input input-bordered w-[300px] mb-5 md:mb-0"
          />
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
          {movieData.length === 0 ? (
            <p className="text-2xl font-medium text-blue-500 text-center border-none">
              Data Not found.
            </p>
          ) : (
            movieData.map((movie) => (
              <MovieCard key={movie._id} movie={movie}></MovieCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
