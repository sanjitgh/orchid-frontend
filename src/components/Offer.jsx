import { LuTicketPercent } from "react-icons/lu";

const Offer = () => {
  return (
    <div className=" py-20 relative overflow-hidden">
        <div className="bg-cyan-700 w-[4000px] h-[400px] top-0 right-0 absolute -z-[1] rotate-[10.5deg] hidden md:block"></div>
      <div className="max-w-[1000px] mx-auto flex justify-center backdrop-blur-xl bg-white/40 py-14 md:py-20 md:px-14 px-5 rounded">
        <div className="md:flex text-center md:text-start gap-5 justify-between items-center w-full">
          <h1 className="font-semibold text-3xl text-cyan-950">
            50% Discount for New User
          </h1>
          <button className="btn bg-transparent hover:bg-transparent text-cyan-950 shadow-lg shadow-[#0833445a]">
            Book Your Ticket <LuTicketPercent />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
