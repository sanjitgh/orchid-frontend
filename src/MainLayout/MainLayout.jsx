import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../provaider/AuthProvaider";

const MainLayout = () => {
  const {darkMood,setDarkMood,} = useContext(AuthContext)
  return (
    <>
      <div className={`${darkMood && "dark"}`}>
        <Header></Header>
        <main className="min-h-[calc(100vh-75px)]">
          <Outlet></Outlet>
          <Toaster></Toaster>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
