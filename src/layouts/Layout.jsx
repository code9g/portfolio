import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <div className="text-xl text-primary-color antialiased selection:bg-primary-color selection:text-secondary-color">
      <div className="fixed top-0 -z-10 h-screen w-screen bg-secondary-color bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
