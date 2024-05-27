import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components";

function Layout(): JSX.Element {
  return (
    <>
      <NavigationBar />

      <Outlet />
    </>
  );
}

export default Layout;
