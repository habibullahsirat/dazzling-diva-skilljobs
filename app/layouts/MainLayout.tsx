import { Outlet } from "react-router";
import TopBar from "../layouts/shared/TopBar";
import NavBar from "../layouts/shared/NavBar";
import Footer from "../layouts/shared/Footer";

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
