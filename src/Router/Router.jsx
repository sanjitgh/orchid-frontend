import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/",
            element: <Logout></Logout>
        }
    ]
  },
]);

export default router;