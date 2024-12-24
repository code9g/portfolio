import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="text-xl text-neutral-300 antialiased selection:bg-neutral-400 selection:text-neutral-950">
      <div className="fixed top-0 -z-10 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
