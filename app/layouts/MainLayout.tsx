import { Outlet } from "react-router";
import TopBar from "../layouts/shared/TopBar";
import NavBar from "../layouts/shared/NavBar";

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Outlet />
    </>
  );
}
