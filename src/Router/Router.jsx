import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllMovies from "../Pages/AllMovies";
import AddMovie from "../Pages/AddMovie";
import MyFevourite from "../Pages/MyFevourite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allmovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("http://localhost:5000/movies")
      },
      {
        path: "/addmovie",
        element: <AddMovie></AddMovie>
      },
      {
        path: "/myfevourite",
        element: <MyFevourite></MyFevourite>
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
