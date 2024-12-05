import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/VMNFRq9/71-AX0-J-Iq-L.jpg')] bg-center bg-cover bg-no-repeat min-h-[750px] relative flex justify-center items-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center"></div>
            <div className="z-10 text-white text-center">
              <h1 className="font-bold md:text-5xl text-2xl mb-5">
                Venom: The Last Dance
              </h1>
              <p className="text-gray-300 max-w-[800px] mx-auto">
                Eddie Brock and Venom must make a devastating decision as
                they're pursued by a mysterious military man and alien monsters
                from Venom's home world.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/mFfjxD8/3-JCa-Eki-Sw-WKAwg-LMjp-Ch-F3-1200-80.jpg')] bg-center bg-cover bg-no-repeat min-h-[750px] relative flex justify-center items-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center"></div>
            <div className="z-10 text-white text-center">
              <h1 className="font-bold md:text-5xl text-2xl mb-5">
                Spider-Man: No Way Home
              </h1>
              <p className="text-gray-300 max-w-[800px] mx-auto">
                With Spider-Man's identity now revealed, Peter asks Doctor
                Strange for help. When a spell goes wrong, dangerous foes from
                other worlds start to appear.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/9YkqMjJ/fast-x-poster-header.jpg')] bg-center bg-cover bg-no-repeat min-h-[750px] relative flex justify-center items-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center"></div>
            <div className="z-10 text-white text-center">
              <h1 className="font-bold md:text-5xl text-2xl mb-5">Fast X</h1>
              <p className="text-gray-300 max-w-[800px] mx-auto">
                Dom Toretto and his family are targeted by the vengeful son of
                drug kingpin Hernan Reyes.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
