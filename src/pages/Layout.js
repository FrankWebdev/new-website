import { Outlet } from "react-router-dom";
import { Topbar, Footer } from "../components/index";
import DivsionLine from "../components/DivsionLine";

const Layout = () => {
  return (
    <div className="layout-container">
      <Topbar />
      <DivsionLine />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
