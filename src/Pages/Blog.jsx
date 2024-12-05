import React from "react";

const Blog = () => {

  return (
    <div className="pb-20 pt-12 bg-cyan-50">
      <div className="container mx-auto px-3">
        <h1 className="text-center md:text-5xl text-2xl text-cyan-700 font-bold mb-10">
          Blogs
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-14 gap-10">
          {/* card 1 */}
          <div className="card card-compact bg-transparent p-0">
            <figure>
              <img
                className="rounded-xl mb-3 w-full"
                src="https://i.ibb.co.com/Vq3NKzn/img-2.png"
              />
            </figure>
            <div className=" p-0">
              <div
                className="flex items-center gap-5 mb-3
              "
              >
                <div className="badge badge-outline outline-cyan-700 p-3">
                  News
                </div>
                <div>
                  <p>Jul 5, 2024</p>
                </div>
              </div>
              <h2 className="card-title">
                The Girl I Like Forgot Her Glasses Anime Comes Clear in Credit
                less Opening and Ending Videos
              </h2>
            </div>
          </div>
          {/* card 2 */}
          <div className="card card-compact bg-transparent p-0">
            <figure>
              <img
                className="rounded-xl mb-3 w-full"
                src="https://i.ibb.co.com/WsN6QCX/img-4.png"
              />
            </figure>
            <div className=" p-0">
              <div
                className="flex items-center gap-5 mb-3
              "
              >
                <div className="badge badge-outline outline-cyan-700 p-3">
                  News
                </div>
                <div>
                  <p>Jul 5, 2024</p>
                </div>
              </div>
              <h2 className="card-title">
              The Girl I Like Forgot Her Glasses Anime Comes Clear in Credit less Opening and Ending Videos
              </h2>
            </div>
          </div>
          {/* card 3 */}
          <div className="card card-compact bg-transparent p-0">
            <figure>
              <img
                className="rounded-xl mb-3 w-full"
                src="https://i.ibb.co.com/FmBsksx/img-5.png"
              />
            </figure>
            <div className=" p-0">
              <div
                className="flex items-center gap-5 mb-3
              "
              >
                <div className="badge badge-outline outline-cyan-700 p-3">
                  News
                </div>
                <div>
                  <p>Jul 5, 2024</p>
                </div>
              </div>
              <h2 className="card-title">
              The Girl I Like Forgot Her Glasses Anime Comes Clear in Credit less Opening and Ending Videos
              </h2>
            </div>
          </div>
          {/* card 4 */}
          <div className="card card-compact bg-transparent p-0">
            <figure>
              <img
                className="rounded-xl mb-3 w-full"
                src=" https://i.ibb.co.com/2tH7NpS/img-6.png"
              />
            </figure>
            <div className=" p-0">
              <div
                className="flex items-center gap-5 mb-3
              "
              >
                <div className="badge badge-outline outline-cyan-700 p-3">
                  News
                </div>
                <div>
                  <p>Jul 5, 2024</p>
                </div>
              </div>
              <h2 className="card-title">
              Two New The Quintessential Quintuplets Side-Story Anime Illustrations Arrive Ahead of OVA Release This Friday
              </h2>
            </div>
          </div>
          {/* card 5 */}
          <div className="card card-compact bg-transparent p-0">
            <figure>
              <img
                className="rounded-xl mb-3 w-full"
                src="https://i.ibb.co.com/3fjz52X/img-8.png"
              />
            </figure>
            <div className=" p-0">
              <div
                className="flex items-center gap-5 mb-3
              "
              >
                <div className="badge badge-outline outline-cyan-700 p-3">
                  News
                </div>
                <div>
                  <p>Jul 5, 2024</p>
                </div>
              </div>
              <h2 className="card-title">
              hololive Indonesia Announces 3D Showcase for 2nd Generation Members
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
