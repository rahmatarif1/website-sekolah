import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from "./ScrollToTop";

function Layout() {
  return (
    <div className="min-h-screen">
         <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;