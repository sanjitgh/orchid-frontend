import { LuTicketPercent } from "react-icons/lu";

const Offer = () => {
  return (
    <div className=" py-20 relative overflow-hidden bg-white dark:bg-slate-700">
      <div className="bg-cyan-700 dark:bg-slate-700 w-[4000px] h-[400px] top-0 right-0 absolute z-[1] rotate-[10.5deg] hidden md:block dark:border-t"></div>
      <div className="max-w-[1000px] mx-auto flex justify-center backdrop-blur-xl bg-white/40 dark:bg-gray-600 py-14 md:py-20 md:px-14 px-5 rounded z-50 relative">
        <div className="md:flex text-center md:text-start gap-5 justify-between items-center w-full">
          <h1 className="font-semibold text-3xl text-cyan-950 dark:text-gray-200">
            50% Discount for New User
          </h1>
          <button className="btn text-gray-200 hover:bg-cyan-800 border-cyan-700 hover:border-transparent bg-cyan-700 dark:text-gray-200 dark:bg-gray-600 hover:dark:bg-gray-700 dark:border-gray-500 hover:dark:border-gray-600 shadow-lg shadow-[#0833445a]">
            Book Your Ticket <LuTicketPercent />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
