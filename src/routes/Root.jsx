import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer";
import BreadCrum from "../component/BreadCrum";

export default function Root() {
  return (
    <>
      <Header />
      { window.location.pathname === "/" || <BreadCrum/>}
      <Outlet/>
      <Footer />
    </>
  );
}
