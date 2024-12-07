import { PiFilmSlateFill } from "react-icons/pi";
import ComingSoonCard from "./ComingSoonCard";

const ComingSoon = () => {
  return (
    <div className="py-20 pb-32 dark:bg-slate-700 bg-white">
      <div className="container mx-auto px-3">
        <div className="text-center">
          <div className="text-center text-5xl flex justify-center mb-3 text-cyan-700">
            <PiFilmSlateFill />
          </div>
          <h3 className="text-base text-gray-500">New upcoming movies</h3>
          <h1 className="text-cyan-700 dark:text-gray-200 font-bold text-2xl md:text-5xl mb-10">
            Movies Coming Soon
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ComingSoonCard></ComingSoonCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
