import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const { _id, image, title, genre, duration, rating, year, summery } =
    useLoaderData();
  return (
    <div className="py-14 bg-cyan-50">
      <div className="container mx-auto px-3">
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
                      Ration :
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
              <span className="font-medium text-lg text-gray-800">Description : <br /></span>
              {summery}
            </p>
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
