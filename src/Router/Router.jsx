import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllMovies from "../Pages/AllMovies";
import AddMovie from "../Pages/AddMovie";
import MyFevourite from "../Pages/MyFevourite";
import MovieDetails from "../components/MovieDetails";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/Blog";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/movies"),
      },
      {
        path: "/allmovies",
        element: (
          <PrivetRoute>
            <AllMovies></AllMovies>
          </PrivetRoute>
        ),
        loader: () => fetch("http://localhost:5000/movies"),
      },
      {
        path: "/allmovies/moviedetails/:id",
        element: (
          <PrivetRoute>
            <MovieDetails></MovieDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movies/${params.id}`),
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
        path: "/myfevourite",
        element: (
          <PrivetRoute>
            <MyFevourite></MyFevourite>
          </PrivetRoute>
        ),
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
