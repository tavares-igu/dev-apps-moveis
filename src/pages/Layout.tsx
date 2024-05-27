import { Outlet } from "react-router-dom";
import { NavigationBar, Warning } from "../components";

function Layout(): JSX.Element {
  if (window.location.pathname === "/") window.location.href = "/home";

  return (
    <>
      <NavigationBar />
      <Warning />
      <Outlet />
    </>
  );
}

export default Layout;
