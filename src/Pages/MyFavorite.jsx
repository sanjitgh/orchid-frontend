import { useLoaderData } from "react-router-dom";
import FavoriteMovieCard from "../components/FavoriteMovieCard";


const MyFavorite = () => {
  const loadededMovie = useLoaderData();
  return (
    <div className="py-20">
      <div className="container mx-auto px-3">
        <h1 className="font-bold text-2xl md:text-5xl mb-10 text-center text-cyan-700">Favorite Movie List</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">   
          {loadededMovie.length > 0 ? (
            loadededMovie.map((data) => (
              <FavoriteMovieCard key={data._id} data={data}></FavoriteMovieCard>
            ))
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFavorite;
