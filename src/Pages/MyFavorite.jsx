import { useLoaderData } from "react-router-dom";


const MyFavorite = () => {
    const movies = useLoaderData();
    console.log(movies?.title);
    // const movies = {
    //     image,
    //     title,
    //     genre,
    //     duration,
    //     year,
    //     rating,
    //     summery,
    //     currentUserEmail
    //   };
    return (
        <div>
           
        </div>
    );
};

export default MyFavorite;