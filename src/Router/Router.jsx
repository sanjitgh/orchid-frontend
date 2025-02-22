import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllMovies from "../Pages/AllMovies";
import AddMovie from "../Pages/AddMovie";
import MyFavorite from "../Pages/MyFavorite";
import MovieDetails from "../components/MovieDetails";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/Blog";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import UpdateMovie from "../components/UpdateMovie";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://orchid-backend-server.vercel.app/movies"),
      },
      {
        path: "/allmovies",
        element: (
          <PrivetRoute>
            <AllMovies></AllMovies>
          </PrivetRoute>
        ),
        loader: () => fetch("https://orchid-backend-server.vercel.app/movies"),
      },
      {
        path: "/allmovies/moviedetails/:id",
        element: (
          <PrivetRoute>
            <MovieDetails></MovieDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://orchid-backend-server.vercel.app/movies/${params.id}`),
      },
      {
        path: "/addmovie",
        element: (
          <PrivetRoute>
            <AddMovie></AddMovie>
          </PrivetRoute>
        ),
      },
      {
        path: "/myfavorite/:email",
        element: (
          <PrivetRoute>
            <MyFavorite></MyFavorite>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://orchid-backend-server.vercel.app/favoritemovie/${params.email}`),
      },
      {
        path: "/updatemovie/:id",
        element: (
          <PrivetRoute>
            <UpdateMovie></UpdateMovie>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://orchid-backend-server.vercel.app/movies/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
