import { Outlet } from "react-router";
import NavBar from "../layouts/shared/NavBar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
