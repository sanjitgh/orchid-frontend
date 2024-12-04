import { useState } from "react";

const AddMovie = () => {
  const handelAddMovie = (e) => {

    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const year = form.year.value;
    const rating = form.rating.value;
    const summery = form.summery.value;

    // image validation
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
    if(!urlRegex.test(image)){
      alert("provide image")
    }
    const details = {
      image,
      title,
      genre,
      duration,
      year,
      rating,
      summery,
    };

    console.log(details);
  };

  return (
    <div className="min-h-[800px] flex justify-center items-center bg-[url('https://i.ibb.co.com/8ssfbBv/avengers-face-off.webp')] bg-center bg-cover bg-no-repeat relative">
      <div className="absolute inset-0 bg-black/90 flex items-center justify-center"></div>
      <form
        onSubmit={handelAddMovie}
        className="w-[1000px] mx-auto px-3 bg-cyan-700 shadow-[#38e8ff4d] shadow-xl text-white rounded z-10 my-16"
      >
        <h1 className="text-2xl md:text-5xl font-bold text-center pt-10 logo">
          Add Movie Here
        </h1>
        <div className="grid grid-cols-2 gap-5 p-10">
          {/* image link */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-white text-base">
                Movie Poster
              </span>
            </div>
            <input
              name="image"
              autoComplete="off"
              type="text"
              placeholder="Poster image link"
              className="input input-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            />
          </label>

          {/* title */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-white text-base">
                Movie Title
              </span>
            </div>
            <input
              name="title"
              type="text"
              autoComplete="off"
              placeholder="Title"
              className="input input-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            />
          </label>

          {/* genre */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-white text-base">Genre</span>
            </div>
            <select
              name="genre"
              className="select select-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            >
              <option disabled className="text-black">
                Choose One
              </option>
              <option className="text-black">Action</option>
              <option className="text-black">Adventure</option>
              <option className="text-black">Comedy</option>
              <option className="text-black">Drama</option>
              <option className="text-black">Horror</option>
              <option className="text-black">Thriller</option>
              <option className="text-black">Science fiction</option>
            </select>
          </label>

          {/* duration */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-white text-base">Duration</span>
            </div>
            <input
              name="duration"
              type="text"
              autoComplete="off"
              placeholder="Duration in minutes"
              className="input input-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            />
          </label>

          {/* Release Year */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-white text-base">
                Release Year
              </span>
            </div>
            <select
              name="year"
              className="select select-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            >
              <option disabled className="text-black">
                Add Release year
              </option>
              <option className="text-black">2010</option>
              <option className="text-black">2011</option>
              <option className="text-black">2012</option>
              <option className="text-black">2013</option>
              <option className="text-black">2014</option>
              <option className="text-black">2015</option>
              <option className="text-black">2016</option>
              <option className="text-black">2017</option>
              <option className="text-black">2018</option>
              <option className="text-black">2019</option>
              <option className="text-black">2020</option>
              <option className="text-black">2021</option>
              <option className="text-black">2022</option>
              <option className="text-black">2023</option>
              <option className="text-black">2024</option>
            </select>
          </label>

          {/* Rating  */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-white text-base">Rating</span>
            </div>
            <input
              name="rating"
              type="text"
              autoComplete="off"
              placeholder="Rating 1 to 5 Star"
              className="input input-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300"
            />
          </label>

          {/* Summery  */}
          <label className="form-control w-full col-span-2">
            <div className="label">
              <span className="label-text text-white text-base">Summery</span>
            </div>
            <textarea
              name="summery"
              className="input input-bordered w-full border-white bg-transparent focus:border-white focus:outline-none rounded-none placeholder-gray-300 h-32 p-4"
              placeholder="Detaile"
            ></textarea>
          </label>

          {/* button */}
          <div className="col-span-2 text-center">
            <input
              className="btn bg-transparent hover:bg-transparent border-white text-white rounded-tl-lg hover:rounded-tl-none hover:rounded-tr-lg rounded-br-lg hover:rounded-br-none transition-all hover:rounded-bl-lg rounded-none w-40"
              type="submit"
              value="Add Movie"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
